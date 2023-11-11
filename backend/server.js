import path from "path";
import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
dotenv.config();

// app.use(
//   fileUpload({
//     useTempFiles: true,
//   })
// );

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    // methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());
connectDB(); // connect to database

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
