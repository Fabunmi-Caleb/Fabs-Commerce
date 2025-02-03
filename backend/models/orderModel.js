import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: false }, // null for guest
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        productName: { type: String, required: true },
        productPrice: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalItems: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    shippingAddress: { type: Object, required: true },
    paymentInfo: {
      id: { type: String, required: true },
      status: { type: String, required: true },
    },
    orderStatus: { type: String, default: "Processing" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
