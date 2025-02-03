import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import { filterProducts } from "../services/filterService.js";

const showAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    if (!allProducts)
      return res.status(501).send("No Products Found to Display!");
    res.status(200).json({ count: allProducts.length, products: allProducts });
  } catch (e) {
    res.status(501).send(`Error: ${e}`);
  }
};

const createProduct = async (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(500).send("Please Input all required fields!!");
  }

  const newProduct = new Product(req.body);
  try {
    newProduct.totalRatings = newProduct.ratings.length;
    await newProduct.save();
    res.status(200).json({
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      category: newProduct.category,
      brand: newProduct.brand,
      images: newProduct.images,
      tags: newProduct.tags,
      ratings: newProduct.ratings,
    });
  } catch (e) {
    res.status(500).send("Please Input all necessary fields");
  }
};

const showProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const foundProduct = await Product.findById(id).populate(
      "category",
      "name"
    ); //retrives only the name of the category
    if (!foundProduct) {
      return res.status(400).send("Product Not Found!");
    }
    res.status(200).json(foundProduct);
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if(!await Product.findById(id)) return res.status(404).send(`Product Not Found!`);
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    await updatedProduct.save();
    res.status(200).json({
      name: updatedProduct.name,
      description: updatedProduct.description,
      price: updatedProduct.price,
      category: updatedProduct.category,
      brand: updatedProduct.brand,
      images: updatedProduct.images,
      tags: updatedProduct.tags,
    });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if(!await Product.findById(id)) return res.status(404).send(`Product Not Found!`);
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({message: "Product Deleted Successfully!", deletedProduct});
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

//Product CRUD Rating Routes

const addRating = async (req, res) => {
  const { id } = req.params; //this is the productId
  const { rating, comment } = req.body;
  const product = await Product.findById(id);

  const userId = req.session.user.id;

  //Check if user exists
  const userExists = await User.findById(userId);

  if (!product) {
    return res.status(400).send("Product Not Found!");
  }

  if (!userExists) {
    return res.status(400).send("User Not Found!");
  }

  const reviewLimit = product.ratings.find(
    (rating) => rating.userId.toString() === userId
  );
  if (reviewLimit) {
    return res.status(400).send("User is only allowed One Rating per Product.");
  }

  try {
    const newRating = { userId, rating, comment };
    product.ratings.push(newRating);
    product.totalRatings = product.ratings.length;
    let totalRatingScore = 0;
    for (const rating of product.ratings) {
      totalRatingScore += rating.rating;
    }
    product.averageRating = Math.round((totalRatingScore / product.totalRatings)*10)/10;
    await product.save();
    res.status(200).json(product);
  } catch (e) {
    res.status(501).send(`Error ${e}`);
  }
};

const updateRating = async (req, res) => {
  const { id } = req.params; //again this is the products id
  const { rating, comment } = req.body;
  const product = await Product.findById(id);

  const userId = req.session.user.id;

  //Check if user exists
  const userExists = await User.findById(userId);

  if (!product) {
    return res.status(400).send("Product Not Found!");
  }

  if (!userExists) {
    return res.status(400).send("User Not Found!");
  }

  try {
    const ratingIndex = product.ratings.findIndex(
      (rating) => rating.userId.toString() === userId
    );
    const updatedRating = { userId, rating, comment };
    product.ratings.splice(ratingIndex, 1, updatedRating);
    product.totalRatings = product.ratings.length;
    let totalRatingScore = 0;
    for (const rating of product.ratings) {
      totalRatingScore += rating.rating;
    }
    product.averageRating = Math.round((totalRatingScore / product.totalRatings)*10)/10;
    await product.save();
    res.status(200).json(product);
  } catch (e) {
    res.send(501).send(`Error: ${e}`);
  }
};

const deleteRating = async (req, res) => {
  const { id } = req.params; //again this is the product Id
  const product = await Product.findById(id);

  const userId = req.session.user.id;

  //Check if user exists
  const userExists = await User.findById(userId);

  if (!product) {
    return res.status(400).send("Product Not Found!");
  }

  if (!userExists) {
    return res.status(400).send("User Not Found!");
  }

  try {
    const ratingIndex = product.ratings.findIndex(
      (rating) => rating.userId.toString() === userId
    );
    product.ratings.splice(ratingIndex, 1);
    product.totalRatings = product.ratings.length;
    let totalRatingScore = 0;
    for (const rating of product.ratings) {
      totalRatingScore += rating.rating;
    }
    product.averageRating = Math.round((totalRatingScore / product.totalRatings)*10)/10;
    await product.save();
    res.status(200).json({ message: "Rating Deleted Successfully", product });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

//Product Filtering Routes

const getFilteredProducts = async (req, res) => {
  const { name, sort, category, color, priceMin, priceMax } = req.query; //if i dont put any query strings, it returns all the products in the database

  try {
    const filters = { name, sort, category, color, priceMin, priceMax };
    const filteredProducts = await filterProducts(filters);

    res.status(200).json({
      count: filteredProducts.length,
      filterProducts: filteredProducts,
    }); // Return filtered products as a response
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const searchProducts = async (req, res) => {
  try {
    const { query, sort } = req.query; //query being destructured is what the user enters in the input field
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const searchCondition = {
      $or: [
        { name: { $regex: query, $options: "i" } }, // Case-insensitive search on name
        { description: { $regex: query, $options: "i" } }, // Case-insensitive search on description
        { color: { $regex: query, $options: "i" } },
      ],
    };

    //Sorting Order (Most Likely )
    // let sortOption = {};
    // if (sort === "rating_asc") {
    //   sortOption = { averageRating: 1 }; // Ascending order of rating
    // }
    // if (sort === "rating_desc") {
    //   sortOption = { averageRating: -1 }; // Descending order of rating
    // }

    const products = await Product.find(searchCondition);
    // .sort(sortOption);

    res.status(200).json({ count: products.length, products });
  } catch (error) {
    res.status(501).json({ message: "Error searching products", error });
  }
};

export {
  showAllProducts,
  createProduct,
  showProduct,
  updateProduct,
  deleteProduct,
  addRating,
  updateRating,
  deleteRating,
  getFilteredProducts,
  searchProducts,
};
