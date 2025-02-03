import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log(`Sucessfully Connected to MongoDB!`);
  } catch (error) {
    console.log(`)Error: ${error.message}`);
  }
};

const disconnectDB = () => {
  mongoose.connection.close();
};

export default connectDB;
export { disconnectDB };
