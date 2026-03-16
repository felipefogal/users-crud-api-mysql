import express from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);

export default router;
