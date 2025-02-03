import Joi from "joi";
import { sanitizeHtmlExtension } from "../validators/validatorExtensions.js";

//joi in this case is my own joi that has been extended with
//custom validation checkers i can use for extra validation like sanitizing HTML
const joi = Joi.extend(sanitizeHtmlExtension);

export default joi;
