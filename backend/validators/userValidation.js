import joi from "../validators/index.js";

const userRegistrationSchema = joi.object({
  firstName: joi.string().max(50).sanitizeHtml().required(),
  lastName: joi.string().max(50).sanitizeHtml().required(),
  email: joi.string().email().sanitizeHtml().required(),
  password: joi.string().min(6).sanitizeHtml().required(),
  phone: joi.string().pattern(/^[\+]?[0-9-]+$/).length(11),
  address: joi.object({
    street: joi.string().max(30).sanitizeHtml().required(),
    city: joi.string().max(30).sanitizeHtml().required(),
    state: joi.string().max(30).sanitizeHtml().required(),
    country: joi.string().max(30).sanitizeHtml().required(),
  }),
  shippingAddress: joi.object({
    street: joi.string().max(30).sanitizeHtml().required(),
    city: joi.string().max(30).sanitizeHtml().required(),
    state: joi.string().max(30).sanitizeHtml().required(),
    country: joi.string().max(30).sanitizeHtml().required(),
  }),
  useSameShip: joi.boolean().default(false),
  role: joi.string().valid("user", "admin").default("user"),
});

const userUpdateSchema = userRegistrationSchema.append({
  password: joi.string().min(5).sanitizeHtml().optional(), // Make password optional by overriding the password field that was originally required in the userRegistration Schema
});

const passwordUpdateSchema = joi.object({
  currentPassword: joi.string().min(5).sanitizeHtml().required(),
  newPassword: joi.string().min(5).sanitizeHtml().required(),
});

const userLoginSchema = joi.object({
  email: joi.string().email().sanitizeHtml().required(),
  password: joi.string().min(5).sanitizeHtml().required(),
});

export {
  userRegistrationSchema,
  userUpdateSchema,
  passwordUpdateSchema,
  userLoginSchema,
};
