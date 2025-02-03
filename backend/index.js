import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import session from "express-session";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";
//routes
import { router as productRoutes } from "./routes/productRoutes.js";
import { router as categoryRoutes } from "./routes/categoryRoutes.js";
import { router as userRoutes } from "./routes/userRoutes.js";
import { router as cartRoutes } from "./routes/cartRoutes.js";
import { router as classRoutes } from "./routes/classRoutes.js";
import { router as orderRoutes } from "./routes/orderRoutes.js";
import { router as authRoutes } from "./routes/authRoutes.js";
import { initGuestSession } from "./middleware/guestSessionMiddleware.js";

dotenv.config();
const port = process.env.PORT || 8080;
const frontendPort = process.env.FRONTENDPORT || 5173;

const app = express();

//CORS configuration
const allowedOrigins = [frontendPort]; 

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps, Postman)
    if (!origin) {
      return callback(null, true);
    }
    // Check if the request's origin is allowed
    if (allowedOrigins.indexOf(origin) === -1) {
      const message =
        "The CORS policy for this site does not allow access from the specified origin.";
      return callback(new Error(message), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Restrict methods
  allowedHeaders: ["Content-Type", "Authorization"], // Restrict headers
  preflightContinue: false, // Whether or not to pass the CORS preflight response to the next handler
  optionsSuccessStatus: 204, // For legacy browsers that do not handle 204 status properly
  credentials: true // Allow credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));

connectDB(); //connect to the database before any routing is done.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 1, // 15 minutes of session duration
      // secure: false,  // Set to `true` if using HTTPS
      // sameSite: "none" // For cross-origin requests (use 'Lax' or 'Strict' for same-origin)
    },
  })
);
app.use(mongoSanitize());
// app.use(
//   mongoSanitize({
//     replaceWith: '_',
//   }),
// );

//include routes
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/class", classRoutes);
app.use("/order", orderRoutes);
app.use("/auth", authRoutes);

// when the user first enters the site (the home route),
//he has automatically logged in as a guest user so he can add stuff to cart without needing to sign up.
app.get("/", initGuestSession);

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
