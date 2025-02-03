import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import * as cartControllers from "../controllers/cartController.js";
import { validateCartAddition, validateCartRemoval, validateCartQuantityUpdate } from "../middleware/validationMiddleware.js";
import { requireLogin, requireLoginOrGuest } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/show", requireLoginOrGuest, wrapAsync(cartControllers.showCart));

router.post("/add", requireLoginOrGuest, validateCartAddition, wrapAsync(cartControllers.addToCart));
router.put("/remove", requireLoginOrGuest, validateCartRemoval, wrapAsync(cartControllers.removeFromCart));
router.put("/update", requireLoginOrGuest, validateCartQuantityUpdate ,wrapAsync(cartControllers.updateItemQuantity)); //increase or decrease the amount of  a particular item in the cart
router.delete("/clear", requireLoginOrGuest, wrapAsync(cartControllers.clearCart));

export { router };
