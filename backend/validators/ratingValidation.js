import joi from "../validators/index.js";

const ratingValidationSchema = joi.object({
  userId: joi.string().hex().length(24).sanitizeHtml(),
  rating: joi.number().min(1).max(5).required(),
  comment: joi.string().sanitizeHtml().max(100).optional(),
});

export { ratingValidationSchema };
