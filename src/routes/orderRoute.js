import express from "express";
import {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Orders
 *  description: API de pedidos
 */

/**
 * @swagger
 * /orders:
 *  get:
 *    summary: Lista todos os pedidos
 *    tags: [Orders]
 *    responses:
 *      200:
 *        description: Lista de pedidos
 */
router.get("/orders", getOrders);

/**
 * @swagger
 * /orders/{id}:
 *  get:
 *    summary: Retorna um pedido pelo ID
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID do pedido
 *    responses:
 *      200:
 *        description: Pedido encontrado
 *      404:
 *        description: Pedido não encontrado
 */
router.get("/orders/:id", getOrderById);

/**
 * @swagger
 * /orders:
 *  post:
 *    summary: Cria um novo pedido
 *    tags: [Orders]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Order'
 *    responses:
 *      201:
 *        description: Pedido criado com sucesso
 *      500:
 *        description: Erro ao criar pedido
 */
router.post("/orders", createOrder);

/**
 * @swagger
 * /orders/{id}:
 *  put:
 *    summary: Atualiza um pedido pelo ID
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID do pedido
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Order'
 *    responses:
 *      200:
 *        description: Pedido atualizado com sucesso
 *      404:
 *        description: Pedido não encontrado
 */
router.put("/orders/:id", updateOrder);

/**
 * @swagger
 * /orders/{id}:
 *  delete:
 *    summary: Exclui um pedido pelo ID
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID do pedido
 *    responses:
 *      200:
 *        description: Pedido excluído com sucesso
 *      404:
 *        description: Pedido não encontrado
 */
router.delete("/orders/:id", deleteOrder);

export default router;
