import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: false },
    guestId: { type: String, required: false },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, default: 1, required: true },
      },
    ],
    totalItems: { type: Number, required: true, default: 0 }, //Total number of items in the cart
    totalPrice: { type: Number, required: true, default: 0 }, // Total calculated price of items
  },
  { timestamps: true }
);

//create a user virtual for the cart so we can populate the cart with actual needed user info (which is just the users name in this case)
cartSchema.virtual("user", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
  justOne: true,
});

//create a product virtual for the cart so we can populate the cart with actual needed product info (in this case the products name)
cartSchema.virtual("products", {
  ref: "Product",
  localField: "items.productId",
  foreignField: "_id",
  justOne: false,
});

// Ensure virtuals are included when converting to JSON or Object
cartSchema.set("toObject", { virtuals: true });
cartSchema.set("toJSON", { virtuals: true });

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
