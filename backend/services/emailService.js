import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendOrderEmail = async (userEmail, order) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Order Confirmation",
    html: `
      <h2>Thank you for your order!</h2>
      <p>Order ID: ${order._id}</p>
      <p>Order Status: ${order.orderStatus}</p>
      <h3>Shipping Address:</h3>
      <p>${order.shippingAddress.street}, ${order.shippingAddress.city}, ${
      order.shippingAddress.state
    } , ${order.shippingAddress.country}</p>
    <h3>Items:</h3>
      <ul>
        ${order.items
          .map(
            (item) =>
              `<li>${item.quantity} x ${
                item.productName
              } - $${item.productPrice.toFixed(2)}</li>`
          )
          .join("")}
          </ul>
          <h3>Total Items Purchased: ${order.totalItems}</h3>
          <h3>Total Amount: ₦${order.totalAmount.toFixed(2)}</h3>
      <h3>We hope you enjoy your purchase!</h3>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};


export { sendOrderEmail };
