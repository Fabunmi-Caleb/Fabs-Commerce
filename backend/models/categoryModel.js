import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    parentCategory: { type: Schema.Types.ObjectId, ref: "Category" }, // For sub-categories
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
