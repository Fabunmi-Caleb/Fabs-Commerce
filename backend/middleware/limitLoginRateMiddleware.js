import rateLimit from "express-rate-limit";

//Function to limit the number of login attempts during a particulae time frame
const loginRateLimiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    status: 429,
    message: "Too many login attempts. Please try again later.",
  },
  standardHeaders: true, // Send rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export { loginRateLimiter };
