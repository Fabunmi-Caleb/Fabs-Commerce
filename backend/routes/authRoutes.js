import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import * as authControllers from "../controllers/authController.js";
import * as validators from "../middleware/validationMiddleware.js";
import { requireLogin } from "../middleware/authMiddleware.js";
import { loginRateLimiter } from "../middleware/limitLoginRateMiddleware.js";
import { mergeCarts } from "../middleware/mergeCartsMiddleware.js";
const router = express.Router();

router.post("/login", validators.validateUserLogin, loginRateLimiter, wrapAsync(authControllers.login));
router.post("/logout", requireLogin, wrapAsync(authControllers.logout));
router.post("/guestLogout", wrapAsync(authControllers.guestLogout));
router.get("/check-session", requireLogin, wrapAsync(authControllers.checkSession));

export { router };
