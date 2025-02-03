import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";

//These functions should only be done by an admin user

const createCategory = async (req, res) => {
  if (!req.body.name) {
    return res.status(501).send(`Please input all required fields!`);
  }

  const nameExists = await Category.findOne({ name: req.body.name });
  if (nameExists) return res.status(400).send("Category Name already Exists!");

  const newCategory = new Category(req.body);
  try {
    await newCategory.save();
    res.status(200).json({
      id: newCategory._id,
      name: newCategory.name,
      description: newCategory.description,
      parentCategory: newCategory.parentCategory,
    });
  } catch (e) {
    res.status(501).send("Please Input all the required fields!");
  }
};

const viewCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const foundCategory = await Category.findById(id);
    if (!foundCategory) {
      return res.status(400).send("Category Not Found!");
    }

    res.status(200).json(foundCategory);
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    if(!await Category.findById(id)) return res.status(404).send(`Category Not Found!`);
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    await updatedCategory.save();
    res.status(200).json({
      id: updatedCategory._id,
      name: updatedCategory.name,
      description: updatedCategory.description,
      parentCategory: updatedCategory.parentCategory,
    });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    if(!await Category.findById(id)) return res.status(404).send(`Category Not Found!`);
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.status(200).json({message: "Category Deleted Successfully!", deletedCategory});
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

export { createCategory, viewCategory, deleteCategory, updateCategory };
