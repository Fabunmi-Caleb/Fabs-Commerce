import * as userValidators from "../validators/userValidation.js";
import { categoryValidationSchema } from "../validators/categoryValidation.js";
import { productValidationSchema } from "../validators/productValidation.js";
import { ratingValidationSchema } from "../validators/ratingValidation.js";
import * as cartVlidators from "../validators/cartValidation.js";
import { orderValidationSchema } from "../validators/orderValidation.js";

//User Validation
const validateUserRegistration = (req, res, next) => {
  const { error } = userValidators.userRegistrationSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

const validateUserUpdate = (req, res, next) => {
  const { error } = userValidators.userUpdateSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

const validatePasswordUpdate = (req, res, next) => {
  const { error } = userValidators.passwordUpdateSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

const validateUserLogin = (req, res, next) => {
  const { error } = userValidators.userLoginSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

//Category Validation
const validateCategory = (req, res, next) => {
  const { error } = categoryValidationSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

//Product Validation
const validateProduct = (req, res, next) => {
  const { error } = productValidationSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

//Rating Validation
const validateRating = (req, res, next) => {
  const { error } = ratingValidationSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

//Cart Validation
const validateCartAddition = (req, res, next) => {
  const { error } = cartVlidators.cartAdditionSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

const validateCartRemoval = (req, res, next) => {
  const { error } = cartVlidators.cartRemovalSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

const validateCartQuantityUpdate = (req, res, next) => {
  const { error } = cartVlidators.cartQuantityUpdateSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

//Order Validation
const validateOrder = (req, res, next) => {
  const { error } = orderValidationSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((e) => e.message).join(",");
    return res.status(501).send(msg);
  } else {
    next();
  }
};

export {
  validateUserRegistration,
  validateUserUpdate,
  validatePasswordUpdate,
  validateUserLogin,
  validateCategory,
  validateProduct,
  validateRating,
  validateCartAddition,
  validateCartRemoval,
  validateCartQuantityUpdate,
  validateOrder,
};
