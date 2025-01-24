import express from "express";
import multer from "multer";
import {
  addMilestone,
  checkAuth,
  deletePet,
  forgotPassword,
  getMilestones,
  getRegisteredPets,
  login,
  logout,
  registerPetStage1,
  registerPetStage2,
  registerPetStage3,
  resetPassword,
  signup,
  updateUser,
  verifyEmail,
} from "../controllers/auth_controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

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

router.delete("/delete-pet/:id", deletePet);

router.post("/pets/:id/milestones", upload.single("image"), addMilestone);

router.get("/milestones", getMilestones);

router.put("/update", updateUser);

// router.get("/pets/:id/milestones", getMilestones);

// router.delete("/pets/:petId/milestones/:milestoneId", removeMilestone);

export default router;
