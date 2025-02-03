import joi from "../validators/index.js";

//this schema will be used for both categoryCreation and categoryUpdating
const categoryValidationSchema = joi.object({
  name: joi.string().max(20).sanitizeHtml().required(),
  description: joi.string().sanitizeHtml().optional(),
  parentCategory: joi.string().hex().length(24).optional(),
});

export { categoryValidationSchema };
