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

router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/name/:name", getUserByName);
router.get("/email/:email", getUserByEmail);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
