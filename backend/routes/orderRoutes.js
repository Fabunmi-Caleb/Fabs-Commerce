import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import * as orderControllers from "../controllers/orderController.js";
import { requireLogin } from "../middleware/authMiddleware.js";
import { validateOrder } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/place-order", requireLogin, validateOrder, wrapAsync(orderControllers.placeOrder));

export { router };
