import joi from "../validators/index.js";

//this schema will be used for product creation and updating
const productValidationSchema = joi.object({
  name: joi.string().max(50).sanitizeHtml().required(),
  description: joi.string().max(50).sanitizeHtml(),
  price: joi.number().min(0).max(100).required(),
  category: joi.string().hex().length(24).required(),
  brand: joi.string().max(50).sanitizeHtml(),
  color: joi.string().max(20).default("unspecified"),
  images: joi.array().items(joi.string().uri()),
  ratings: joi.array().items(
    joi.object({
      userId: joi.string().hex().length(24),
      rating: joi.number().min(1).max(5).required(),
      comment: joi.string().sanitizeHtml().optional(),
    })
  ),
  averageRating: joi.number().default(0).min(1).max(5),
  totalRatings: joi.number().default(0),
  tags: joi.array().items(joi.string()),
});

export { productValidationSchema };
