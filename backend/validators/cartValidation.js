import joi from "../validators/index.js";

const cartAdditionSchema = joi.object({
  userId: joi.string().sanitizeHtml().hex().length(24).optional(),
  guestId: joi.string().max(50).sanitizeHtml().optional(),
  items: joi.array().items(
    joi.object({
      productId: joi.string().sanitizeHtml().hex().length(24).required(),
      quantity: joi.number().min(1).required(),
    })
  ),
  //this is kind of repeated because productUd and quantity are the inputs the user interacts with and
  //i need to explicitly put it here so that oi will be able to recognize it but it also has to be in
  //the items array above so oi can validate the items array too.
  productId: joi.string().sanitizeHtml().hex().length(24).required(),
  quantity: joi.number().min(1).required(),
  totalItems: joi.number().default(0).min(0),
  totalPrice: joi.number().default(0).min(0),
});

const cartRemovalSchema = joi.object({
  productId: joi.string().sanitizeHtml().hex().length(24).required(),
});

const cartQuantityUpdateSchema = joi.object({
  productId: joi.string().sanitizeHtml().hex().length(24).required(),
  updateType: joi
    .string()
    .sanitizeHtml()
    .valid("increase", "decrease")
    .required(),
});

export { cartAdditionSchema, cartRemovalSchema, cartQuantityUpdateSchema };
