import express from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API de produtos
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de produtos
 */
router.get("/products", getProducts);

/**
 * @swagger
 * /products:
 *   post: 
 *      summary: Cria um novo produto
 *      tags: [Products]
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *   responses:
 *     201:
 *       description: Produto criado
 *     400:
 *       description: Requisição inválida
 *     500:
 *       description: Erro interno do servidor
 */
router.post("/products", createProduct);

router.delete("/products/:id", deleteProduct);

export default router;
