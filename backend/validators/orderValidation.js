import joi from "../validators/index.js";

const orderValidationSchema = joi.object({
  cardNumber: joi.number().min(10000000).max(99999999).required()
  .messages({
    "number.min": "Card Number must be exactly 8 digits",
    "number.max": "CardNumber must be exactly 8 digits",
  }),
  cardHolderName: joi.string().max(50).sanitizeHtml().required(),
  expiryDate: joi.string().sanitizeHtml().required(),
  cvv: joi.number().min(100).max(999).required()
  .messages({
    'number.min': 'Card Number must be exactly 3 digits',
    'number.max': 'Card Number must be exactly 3 digits',
  }),
  userId: joi.string().hex().length(24).sanitizeHtml().optional(),
  items: joi.array().items(
    joi.object({
      productId: joi.string().sanitizeHtml().hex().length(24).required(),
      productName: joi.string().sanitizeHtml().max(50).required(),
      productPrice: joi.number().min(0).max(100).required(),
      quantity: joi.number().min(1).required(),
    })
  ),
  totalItems: joi.number().default(0).min(0),
  totalAmount: joi.number().default(0).min(0),
  shippingAddress: joi.object({
    street: joi.string().sanitizeHtml().max(50).required(),
    city: joi.string().sanitizeHtml().max(50).required(),
    state: joi.string().sanitizeHtml().max(50).required(),
    country: joi.string().sanitizeHtml().max(50).required(),
  }),
  paymentInfo: joi.object({
    id: joi.string().sanitizeHtml().max(50).required(),
    status: joi.string().sanitizeHtml().max(50).required(),
  }),
  orderStatus: joi.string().sanitizeHtml().valid("Processing", "Completed").default("Processing"),
  useDefShip: joi.boolean(),
  userEmail: joi.string().email().sanitizeHtml().optional(),
});

export { orderValidationSchema };
