import express from "express";
import {
  checkAuth,
  forgotPassword,
  getRegisteredPets,
  login,
  logout,
  registerPetStage1,
  registerPetStage2,
  registerPetStage3,
  resetPassword,
  signup,
  verifyEmail,
} from "../controllers/auth_controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify", verifyEmail);

router.post("/forgot", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.post("/add-pet-stage1", registerPetStage1);

router.post("/add-pet-stage2", registerPetStage2);

router.post("/add-pet-stage3", registerPetStage3);

router.get("/get-user-pets", getRegisteredPets);
export default router;
