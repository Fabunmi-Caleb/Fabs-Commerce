import cloudinary from "./cloudinaryConfig.js";
import { uploadImages, deleteImages } from "./cloudinaryFunctions.js";
//Uncomment the line below if you need to upload again but its commented so i'll not mistakenly upload the images again
// import { imageUrls } from "../seeds/seedData.js";

(async () => {
  try {
    // Upload images and get their public IDs and secure URLs
    let { publicIds, secureUrls } = await uploadImages(imageUrls);
    console.log(secureUrls);
    //function to delete the images.
    // await deleteImages(publicIds);
  } catch (error) {
    console.error("Error during image processing:", error);
  }
})();
