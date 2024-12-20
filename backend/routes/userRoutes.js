import express from "express";
import { loginOrRegister, verifyOtp, register } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", loginOrRegister);
router.post("/verify", verifyOtp);
router.post("/register", register);

export default router;
