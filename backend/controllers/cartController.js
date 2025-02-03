import Cart from "../models/cartModel.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";

//Probably won't need this sha to be honest
const createCart = async (req, res) => {
  const { userId } = req.body;

  //Validate required input fields
  if (!userId) {
    return res.status(501).send("Please Input all required fields!");
  }

  //Check if there is a user.
  const userExists = await User.findById(userId);
  if (userExists) {
    const newCart = new Cart(req.body);
    try {
      await newCart.save();
      res.status(200).json(newCart);
    } catch (e) {
      res.status(501).send(`Error: ${e.message} ${e.stack}`);
    }
  } else {
    return res.status(400).send("User Not Found!!");
  }
};

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.session.user ? req.session.user.id : null;
  const guestId = req.session.guestId;

  try {
    let userExists;
    if (userId) {
      // Check if registered user exists
      userExists = await User.findById(userId);
      if (!userExists) return res.status(400).send("User not found!");
    }

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) return res.status(404).send("Product not found");

    // Identify user or guest cart (if the user initially had one)
    let cart;
    if (userId) {
      // Registered user: search for cart by userId
      cart = await Cart.findOne({ userId });
    } else if (guestId) {
      // Guest user: search for cart by guestId
      cart = await Cart.findOne({ guestId });
    } else {
      return res
        .status(400)
        .send(
          "No sessions were found! Register, Login or create a guest session!"
        );
    }

    // Create a new cart if none exists
    if (!cart) {
      cart = new Cart({
        userId: userId || null,
        guestId: guestId || null,
        items: [{ productId, quantity }],
        totalPrice: product.price * quantity,
        totalItems: quantity,
      });
      console.log("New Cart Created!");
    } else {
      // Update cart with new product or update existing product quantity
      const existingItem = cart.items.find((item) =>
        item.productId.equals(productId)
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        console.log("Updated quantity of existing product in cart.");
      } else {
        cart.items.push({ productId, quantity });
        console.log("Added new product to cart.");
      }

      cart.totalItems += quantity;
      cart.totalPrice += product.price * quantity;
    }

    // Save the updated cart
    await cart.save();
    res.status(200).json(cart);
  } catch (e) {
    res.status(501).send(`Error: ${e.message}`);
  }
};

const showCart = async (req, res) => {
  const userId = req.session.user ? req.session.user.id : null; //check if there is a logged in user
  const guestId = req.session.guestId; // check if there is a guest user

  try {
    let foundCart;

    // Check if user is logged in
    if (userId) {
      // Check if user exists
      const userExists = await User.findById(userId);
      if (!userExists) {
        return res.status(400).send("User not found!!");
      }

      // Fetch the cart for the logged-in user
      foundCart = await Cart.findOne({ userId })
        .populate("user", "id firstName lastName")
        .populate("products", "name price");

      if (!foundCart) {
        return res.status(404).send("User Cart Not Found!");
      }
    } else if (guestId) {
      //if there is a guest user:
      foundCart = await Cart.findOne({ guestId })
        .populate("user", "id firstName lastName")
        .populate("products", "name price");

      if (!foundCart) {
        return res.status(404).send("Guest Cart Not Found!");
      }
    } else {
      return res.status(404).send("No cart found for either user or guest!");
    }
    // console.log(foundCart);
    // merge the products name and price from the populated virtual and the quantity from the cart 'items' array
    const cartItems = foundCart.items.map((item) => {
      // Find the corresponding product for each item by matching productId
      const product = foundCart.products.find((prod) =>
        prod._id.equals(item.productId)
      );
      return {
        productId: item.productId,
        productName: product ? product.name : null,
        productPrice: product ? product.price : null,
        quantity: item.quantity, // Quantity from the original 'items' array
      };
    });

    res.status(200).json({
      cartId: foundCart._id,
      userId: foundCart.user ? foundCart.user.id : null,
      guestId: guestId || null,
      name: foundCart.user
        ? `${foundCart.user.firstName} ${foundCart.user.lastName}`
        : null,
      items: cartItems,
      totalItems: foundCart.totalItems,
      totalPrice: foundCart.totalPrice,
    });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

// this is to remove the item entirely from the cart no matter the quantity
const removeFromCart = async (req, res) => {
  const { productId } = req.body; //this productId is the one that the user has in his cart
  const userId = req.session.user ? req.session.user.id : null;
  const guestId = req.session.guestId;

  let cartOwnerId;
  //check unlikely scenario where there is both a registered and a guest user
  if (userId && guestId) {
    console.warn(
      "Warning: Both userId and guestId found. Defaulting to userId."
    );
    cartOwnerId = { userId }; //were making them objects so we can query them without issues
  } else if (userId) {
    cartOwnerId = { userId };
  } else if (guestId) {
    cartOwnerId = { guestId };
  } else {
    return res.status(404).send("No valid session found.");
  }

  try {
    // Fetch cart based on resolved cartOwnerId
    const cart = await Cart.findOne(cartOwnerId).populate("products", "price"); //find the users cart and populate it with the products (because we need the products price to calculate the new price after the item is removed)

    if (!cart) {
      return res.status(400).send("Cart Not Found!");
    }

    const itemIndex = cart.items.findIndex((item) =>
      item.productId.equals(productId)
    );

    if (itemIndex === -1) {
      return res.status(400).send("Product Not Found in Cart!");
    }

    //this gets the quantity of the products we want to remove,
    //we need quantity to update the total items in the cart not because we want to use it to reduce the quantity (the 'update item quantity function below is for that')
    const qty = cart.items[itemIndex].quantity;
    cart.items.splice(itemIndex, 1);
    cart.totalItems -= qty;

    const totalPrice = cart.items.reduce((total, item) => {
      //Find the corresponding product for every item as its going through each one
      const product = cart.products.find((prod) =>
        prod._id.equals(item.productId)
      );
      //so this is getting the price of the product from the populated 'products' field from the Product model
      //and its getting the quantity from the actual item in the cart.
      return total + (product ? product.price * item.quantity : 0);
    }, 0);

    cart.totalPrice = totalPrice;

    await cart.save();
    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

//remove or add to the quantity of an item that exists in the cart
const updateItemQuantity = async (req, res) => {
  const { productId, quantity, updateType } = req.body; //quantity here being the amount he wants to update it by and updateType is either increase or decrease
  const userId = req.session.user ? req.session.user.id : null;
  const guestId = req.session.guestId;

  let cartOwnerId;
  //check unlikely scenario where there is both a registered and a guest user
  if (userId && guestId) {
    console.warn(
      "Warning: Both userId and guestId found. Defaulting to userId."
    );
    cartOwnerId = { userId }; //were making them objects so we can query them without issues
  } else if (userId) {
    cartOwnerId = { userId };
  } else if (guestId) {
    cartOwnerId = { guestId };
  } else {
    return res.status(404).send("No valid session found.");
  }

  try {
    const cart = await Cart.findOne(cartOwnerId);
    if (!cart) {
      return res.status(404).send("Cart Not Found!");
    }
    const product = await Product.findById(productId); // this product is the actual product as it is in the Product's model (included because we need the price)
    if (!product) {
      return res.status(404).send("Product Not Found!");
    }

    const itemIndex = cart.items.findIndex((item) =>
      //just in case you forget, the .equals method checks if they have the same string value and not reference in memory
      item.productId.equals(productId)
    );

    if (itemIndex > -1) {
      // Product is found in cart, so update quantity based on updateType
      switch (updateType) {
        case "increase":
          cart.items[itemIndex].quantity += 1; //we are only increasing by one here because we are mimicking jumia and konga who only allow to increase or decrease the quantity of an item by 1
          cart.totalItems += 1;
          cart.totalPrice += product.price; //if in the future we make it by a specific quantity and not just 1, then it would change to cart.totalPrice += product.price * quantity
          break;
        case "decrease":
          if (cart.items[itemIndex].quantity <= 1) {
            //if there's only one qunatity of that item, remove it entirely
            cart.items.splice(itemIndex, 1);
            cart.totalItems -= 1;
            cart.totalPrice -= product.price;
          } else {
            cart.items[itemIndex].quantity -= 1;
            cart.totalItems -= 1;
            cart.totalPrice -= product.price;
          }
          break;
        default:
          return res.status(400).send("Invalid update type specified.");
      }

      await cart.save();
      res.status(200).json({ message: "Item Quantity Updated", cart });
    } else {
      res
        .status(404)
        .send("Product whose quantity is to be updated not Found in Cart");
    }
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const clearCart = async (req, res) => {
  const userId = req.session.user ? req.session.user.id : null;
  const guestId = req.session.guestId;

  let cartOwnerId;
  //check unlikely scenario where there is both a registered and a guest user
  if (userId && guestId) {
    console.warn(
      "Warning: Both userId and guestId found. Defaulting to userId."
    );
    cartOwnerId = { userId }; //were making them objects so we can query them without issues
  } else if (userId) {
    cartOwnerId = { userId };
  } else if (guestId) {
    cartOwnerId = { guestId };
  } else {
    return res.status(404).send("No valid session found.");
  }

  try {
    const cart = await Cart.findOne(cartOwnerId);
    if(!cart){
      return res.status(404).send("Cart Not Found!");
    }
    cart.items = [];
    cart.totalItems = 0;
    cart.totalPrice = 0;
    await cart.save();
    res
      .status(200)
      .json({ message: "Cart cleared successfully", currentCart: cart });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

export { addToCart, showCart, updateItemQuantity, removeFromCart, clearCart };
