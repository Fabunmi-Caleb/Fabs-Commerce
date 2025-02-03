import Product from "../models/productModel.js";
import dotenv from "dotenv";
import { allSeedData } from "./seedData.js";
import connectDB, { disconnectDB } from "../config/db.js";

dotenv.config();
connectDB();

//maybe have seperate functions to seed specific categories

const seedDB = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(allSeedData);
    //This is to update both the total ratings and the average ratings of each product since they aren't in the dataset.
    const allProducts = await Product.find({});
    for (const product of allProducts) {
      product.totalRatings = product.ratings.length;
      let totalRatingScore = 0;
      for (const rating of product.ratings) {
        totalRatingScore += rating.rating;
      }
      const averageRating = totalRatingScore / product.ratings.length;
      product.averageRating = averageRating;
      await product.save();
    }
    console.log(`Database successfully seeded with products!`);
  } catch (error) {
    console.error(`Error seeding the database with products ${error}`);
  }
};

seedDB().then(() => {
  disconnectDB();
});
