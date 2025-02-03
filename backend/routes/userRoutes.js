import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import * as userControllers from "../controllers/userController.js";
import * as validators from "../middleware/validationMiddleware.js";
import { requireLogin } from "../middleware/authMiddleware.js";
import { isAdmin, isOwnerOrAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();
router.post("/", validators.validateUserRegistration, wrapAsync(userControllers.createUser)); //you obvioulsy don't need to login to create a user account.

router
  .route("/:id")
  .get(requireLogin, isOwnerOrAdmin, wrapAsync(userControllers.showUser))
  .put(requireLogin, isOwnerOrAdmin, validators.validateUserUpdate, wrapAsync(userControllers.updateUser))
  .delete(requireLogin, isOwnerOrAdmin, wrapAsync(userControllers.deleteUser));

router.put("/:id/changepassword", requireLogin, isOwnerOrAdmin, validators.validatePasswordUpdate, wrapAsync(userControllers.changePassword));

export { router };
