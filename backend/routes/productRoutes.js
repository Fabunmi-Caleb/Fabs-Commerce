import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import * as productControllers from "../controllers/productController.js";
import { validateProduct, validateRating } from "../middleware/validationMiddleware.js";
import { requireLogin, requireLoginOrGuest } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";
const router = express.Router();

router.route("/").post(requireLogin, isAdmin, validateProduct, wrapAsync(productControllers.createProduct));

router.get("/getAllProducts", requireLogin, isAdmin, wrapAsync(productControllers.showAllProducts));
router.get("/search", requireLoginOrGuest , wrapAsync(productControllers.searchProducts));
router.get("/getFilteredProducts", requireLoginOrGuest, wrapAsync(productControllers.getFilteredProducts));

router
  .route("/:id")
  .get(requireLoginOrGuest, wrapAsync(productControllers.showProduct))
  .put(requireLogin, isAdmin, validateProduct, wrapAsync(productControllers.updateProduct))
  .delete(requireLogin, isAdmin, wrapAsync(productControllers.deleteProduct));

router.post("/:id/addRating", requireLogin, validateRating, wrapAsync(productControllers.addRating));
router.put("/:id/updateRating", requireLogin, validateRating, wrapAsync(productControllers.updateRating));
router.delete("/:id/deleteRating", requireLogin, wrapAsync(productControllers.deleteRating));


export { router };
