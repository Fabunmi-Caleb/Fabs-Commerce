import Product from "../models/productModel.js";

//this is reusable functiton that takes in a category or class's id and returns all the products within that category
const showProductsInCategory = async (id) => {
  try {
    const categoryProducts = await Product.find({ category: id });
    return categoryProducts;
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
};

const showClothingProducts = async (req, res) => {
  try {
    const clothesId = "673c62eb2d754368614ef784"; //this id is the id of the clothing category
    const clothProducts = await showProductsInCategory(clothesId);
    res.status(200).json({ count: clothProducts.length, clothProducts });
  } catch (e) {
    res.status(501).send(`Error: ${e}`);
  }
};

const showGadgetProducts = async (req, res) => {
  try {
    const gadgetsId = "673c63b112ec42c8fadcc07a"; //this id is the id of the gadgets category
    const gadgetProducts = await showProductsInCategory(gadgetsId);
    res.status(200).json({ count: gadgetProducts.length, gadgetProducts });
  } catch (e) {
    res.status(501).send(`Error: ${e}`);
  }
};

const showFoodProducts = async (req, res) => {
  try {
    const foodsId = "67409cc0df46753e30e02de1"; //this id is the id of the food category
    const foodProducts = await showProductsInCategory(foodsId);
    res.status(200).json({ count: foodProducts.length, foodProducts });
  } catch (e) {
    res.status(501).send(`Error: ${e}`);
  }
};

export { showClothingProducts, showGadgetProducts, showFoodProducts };
