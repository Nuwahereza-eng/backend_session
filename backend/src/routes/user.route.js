import { Router } from "express";
import User from "../models/user.model.js";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();
//http://localhost:5000/api/users/register

router.post("/register", registerUser);
export default router;