//Routes to display all products for a certain category (class)
import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import * as classControllers from "../controllers/classController.js";
const router = express.Router();

router.get("/clothing", wrapAsync(classControllers.showClothingProducts));
router.get("/gadgets", wrapAsync(classControllers.showGadgetProducts));
router.get("/food", wrapAsync(classControllers.showFoodProducts));


export { router };
