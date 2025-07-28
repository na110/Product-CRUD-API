import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoute from "./routes/productRoute.js";

const app = express();

// Midlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/products", productRoute);

export default app;
 