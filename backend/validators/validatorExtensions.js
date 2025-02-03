import sanitizeHtml from "sanitize-html";

// Step 1: Extend Joi to create a custom sanitizing rule
const sanitizeHtmlExtension = (joi) => ({
  type: "string",
  base: joi.string(),
  messages: {
    "string.sanitizeHtml": "{{#label}} must not include HTML!",
  },
  rules: {
    sanitizeHtml: {
      validate(value, helpers) {
        // Step 2: Sanitize the HTML input
        const sanitizedValue = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {},
        });

        // If the sanitized value is different, set an error
        if (sanitizedValue !== value) {
          return helpers.error("string.sanitizeHtml", { sanitizedValue });
        }
        return sanitizedValue;
      },
    },
  },
});

export { sanitizeHtmlExtension };
