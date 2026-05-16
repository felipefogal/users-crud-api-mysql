import express from "express";
import {
  getProducts,
  getProductsById,
  createProduct,
  deleteProduct,
  updateProduct,
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
 * /products/{id}:
 *   get:
 *     summary: Lista um produto específico
 *     tags: [Products]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 */
router.get("/products/:id", getProductsById);

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

/**
 * @swagger
 * /products:
 *  put:
 *    summary: Atualiza/edita um produto existente
 *    tags: [Products]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Product"
 *    responses:
 *      201:
 *        description: Produto atualizado
 *      404:
 *        description: Produto não encontrado
 */
router.put("/products/:id", updateProduct)

/**
 * @swagger
 * /products:
 *   delete:
 *      summary: Deleta  um produto
 *      tags: [Products]
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *   responses:
 *     201:
 *       description: Produto deletado
 *     400:
 *       description: Requisição inválida
 *     500:
 *       description: Erro interno do servidor
 */
router.delete("/products/:id", deleteProduct);

export default router;
