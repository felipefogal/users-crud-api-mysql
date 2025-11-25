import express from "express";
import {
  getUsers,
  getUserById,
  getUserByName,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.get("/users/name/:name", getUserByName);
router.get("/users/email/:email", getUserByEmail);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
