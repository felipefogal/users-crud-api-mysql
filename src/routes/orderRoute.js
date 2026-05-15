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
router.get("/orders/:id", getOrderById);
router.post("/orders", createOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

export default router;
