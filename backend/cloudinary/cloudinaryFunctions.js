import cloudinary from "./cloudinaryConfig.js";

const uploadImages = async (urls) => {
  try {
    const uploadPromises = urls.map((url) =>
      cloudinary.uploader.upload(url, { folder: "Fabs-Commerce" })
    );

    const results = await Promise.all(uploadPromises);

    const publicIds = results.map((result) => result.public_id);
    const secureUrls = results.map((result) => result.secure_url);

    // console.log("Uploaded Public IDs:", publicIds);
    // console.log("Uploaded Secure URLs:", secureUrls);

    // Return the public IDs and secure URLs
    console.log("All Images Uploaded!");
    return { publicIds, secureUrls };
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error;
  }
};

const deleteImages = async (publicIds) => {
  if (!publicIds || publicIds.length <= 0) {
    console.log("No images to delete.");
    return;
  }

  try {
    const deletePromises = publicIds.map((publicId) =>
      cloudinary.uploader.destroy(publicId)
    );

    const results = await Promise.all(deletePromises);

    results.forEach((result, index) => {
      if (result.result === "ok") {
        console.log(
          `Image with public_id ${publicIds[index]} deleted successfully.`
        );
      } else {
        console.log(
          `Failed to delete image with public_id ${publicIds[index]}.`
        );
      }
    });

    console.log("All images deleted.");
  } catch (error) {
    console.error("Error deleting images:", error);
    throw error;
  }
};

export { uploadImages, deleteImages };
