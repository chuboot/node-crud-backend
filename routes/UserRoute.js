import express from "express";
import {
  getUsers,
  getUsersById,
  creteUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();
router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", creteUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
