import { Router } from "express";

import {
  createUser,
  deleteUser,
  getUser,
  getUserCount,
  getUsers,
  updateUser,
} from "../controllers/usersFuntion";

const router = Router();

router.get("/users", getUsers); //consultar uruarios
router.get("/users/count", getUser); //consultar usuarios por id
router.get("/users/id", getUserCount); //contar usuarios
router.post("/users", createUser); //crear usuarios
router.delete("/users/id", deleteUser); //eliminar usuario
router.put("/users", updateUser); //actualizar ususario

export default router;
