import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import * as categoryControllers from "../controllers/categoryController.js"
import { validateCategory } from "../middleware/validationMiddleware.js";
import { requireLogin } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";
const router = express.Router()

router.route("/").post(requireLogin, isAdmin, validateCategory, wrapAsync(categoryControllers.createCategory))

router.route("/:id")
.get(requireLogin, isAdmin, wrapAsync(categoryControllers.viewCategory))
.put(requireLogin, isAdmin, validateCategory, wrapAsync(categoryControllers.updateCategory))
.delete(requireLogin, isAdmin, wrapAsync(categoryControllers.deleteCategory))

export {router};