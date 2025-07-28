import express from "express";
import {
  creatNewProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import { validateBody } from "../middlewares/validate.js";
import { productValidation } from "../validations/productVallidation.js";

const router = express.Router();

router.get("/", getAllProducts);

router.post("/", validateBody(productValidation), creatNewProduct);

router.put("/:id", validateBody(productValidation), updateProduct);

router.delete("/:id", deleteProduct);

export default router;
