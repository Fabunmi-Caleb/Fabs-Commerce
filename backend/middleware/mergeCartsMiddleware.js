import Cart from "../models/cartModel.js";

const mergeCarts = async (req, res) => {
  const userId = req.session.user ? req.session.user.id : null;
  const guestId = req.session.guestId;

  if (!userId) return res.status(404).send("User Not Found!");

  //There are 2 Scenarios:
  //Scenario 1: A guest user adds items to his cart, then registers as a new user,
  //Scenario 2: A formerly registered user (who may or may not have items in his cart), logs in as a guest user, adds items to his (guest) cart and then logs in
  try {
    let userCart = await Cart.findOne({ userId });
    //This is  Scenario 1: because this is a new user, he doesn't have a cart so we create a new cart for him so
    //the items he had previously added before registering can be merged with this new cart
    if (!userCart) {
      userCart = new Cart({ userId, items: [], totalItems: 0, totalPrice: 0 });
    }
    let guestCart = await Cart.findOne({ guestId });
    if (!guestCart) return res.status(404).send("Guest Cart Not Found!");
    if (userCart) {
      // Merge guest cart items into user cart
      guestCart.items.forEach((guestItem) => {
        //This is Scenario 2: because the registered user may or may not have had items in his cart, we check to see if
        //the item that he selected as a guest was already in his cart and if it was, we can just update the items quantity
        //instead of adding it as a new item.
        const existingItem = userCart.items.find((userItem) =>
          userItem.productId.equals(guestItem.productId)
        );
        console.log(existingItem);
        if (existingItem) {
          // Increase quantity if product already exists in user cart
          existingItem.quantity += guestItem.quantity;
          console.log("Same product in guest and user cart, updating quantity");
        } else {
          userCart.items.push(guestItem);
          console.log("New product in guest cart, adding it to user cart");
        }

        // Update total items and price
        userCart.totalItems += guestCart.totalItems;
        userCart.totalPrice += guestCart.totalPrice;
      });
    }
    await userCart.save();
    console.log("Carts Merged!");
    await Cart.findByIdAndDelete(guestCart._id); //delete the guestCart to save space since the user is now registred
  } catch (e) {
    console.error(
      `message: "Failed to merge carts", \n Error: ${e.message}, Stack: ${e.stack}`
    );
  }
};

export { mergeCarts };
