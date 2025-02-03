import Product from "../models/productModel.js";

const applyFilters = (filters) => {
  const query = {};

  if (filters.name) {
    query.name = { $regex: filters.name, $options: "i" }; // Case-insensitive search
  }
  if (filters.category) {
    query.category = filters.category;
  }
  if (filters.color) {
    query.color = filters.color;
  }
  if (filters.priceMin) {
    query.price = { $gte: filters.priceMin };
  }
  if (filters.priceMax) {
    query.price = { $lte: filters.priceMax };
  }
  if (filters.priceMin && filters.priceMax) {
    query.price = { $gte: filters.priceMin, $lte: filters.priceMax };
  }

  return query;
};

const filterProducts = async (filters) => {
  const query = applyFilters(filters);
  let sortOption = {};
  switch (filters.sort) {
    case "price_asc":
      sortOption = { price: 1 }; // Ascending price
      break;
    case "price_desc":
      sortOption = { price: -1 }; // Descending price
      break;
    case "rating_asc":
      sortOption = { averageRating: 1 }; // Ascending rating
      break;
    case "rating_desc":
      sortOption = { averageRating: -1 }; // Descending rating
      break;
    default:
      sortOption = {};
  }

  try {
    return await Product.find(query).sort(sortOption); // Executes the query with filters and sorts them if need be
  } catch (error) {
    throw new Error("Error fetching filtered products: " + error.message);
  }
};

export { filterProducts };
