import Cart from "../models/cartModel.js";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import { sendOrderEmail } from "../services/emailService.js";

const placeOrder = async (req, res) => {
  const { cardNumber, cardHolderName, expiryDate, cvv, useDefShip } = req.body;

  let { userEmail, shippingAddress } = req.body; //had to make it let in case they dont enter an email i'll need to reassign it to a default one

  //Send the order to the logged in users email if they didnt provide an email for it to be sent to
  if (!userEmail) {
    const user = await User.findById(req.session.user.id);
    if (!user) return res.status(404).send("User Not Found!");
    userEmail = user.email;
  }

  //If shipping address is ommited, default to the users shipping adress when he registered
  if (!shippingAddress) {
    if(useDefShip){ //if the user specifies that the shipping address he put when registering should be used.
      const user = await User.findById(req.session.user.id);
      if (!user) return res.status(404).send("User Not Found!");
      
      if (Object.values(user.shippingAddress).every(value => !value)){ //this means the users address is an empty obect - {}
        return res.status(400).send("No Shipping Adress found for user, please input a shipping address");
      }
      shippingAddress = user.shippingAddress;
    } else{
      return res.status(400).send("Please input a shipping address!");
    }
  }

  // Simple validation
  if (!cardNumber || !cardHolderName || !expiryDate || !cvv) {
    return res.status(400).send("Please Input all required payment fields");
  }

  const cart = await Cart.findOne({ userId: req.session.user.id }).populate(
    "products",
    "name price"
  );
  if(!cart) return res.status(404).send(`User cart not found!`)
  if (Array.isArray(cart.items) && cart.items.length <= 0)
    return res
      .status(400)
      .send(
        "No Items found in cart, add items to cart before proceeding to checkout"
      );
  const cartItems = cart.items.map((item) => {
    const product = cart.products.find((prod) =>
      prod._id.equals(item.productId)
    );
    return {
      productId: item.productId,
      productName: product ? product.name : null,
      productPrice: product ? product.price : null,
      quantity: item.quantity,
    };
  });

  // Mock payment success
  const paymentConfirmation = {
    id: `mock_payment_${Date.now()}`,
    status: "succeeded",
    amount: cart.totalPrice,
    date: new Date().toISOString(),
  };

  try {
    // Create order in database
    const order = new Order({
      userId: req.session.user.id,
      items: cartItems,
      totalItems: cart.totalItems,
      totalAmount: cart.totalPrice,
      shippingAddress,
      paymentInfo: {
        id: paymentConfirmation.id,
        status: paymentConfirmation.status,
      },
      orderStatus: "Completed",
    });

    await order.save();

    // Send email to user
    await sendOrderEmail(userEmail, order);

    //clear cart once the order has been completed
    cart.items = [];
    cart.totalItems = 0;
    cart.totalPrice = 0;
    await cart.save();

    res.status(200).json({
      message: "Payment successful and order placed!",
      paymentConfirmation,
      order,
    });
  } catch (e) {
    res.status(501).send(`Error during checkout: ${e.message}, ${e.stack}`);
  }
};

export { placeOrder };
