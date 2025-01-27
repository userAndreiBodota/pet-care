import express from "express";
import multer from "multer";
import {
  checkAuth,
  deletePet,
  forgotPassword,
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
  updatePetDetails,
  updatePetImage,
} from "../controllers/auth_controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this directory exists on your server
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Use timestamp for unique filenames
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

// Base route for testing API health
router.get("/", (req, res) => {
  res.status(200).json({ message: "Auth route is working!" });
});

// Auth routes
router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify", verifyEmail);
router.post("/forgot", forgotPassword);
router.post("/reset-password/:token", resetPassword);

// Pet registration routes
router.post("/add-pet-stage1", registerPetStage1);
router.post("/add-pet-stage2", registerPetStage2);
router.post("/add-pet-stage3", registerPetStage3);

// User routes
router.get("/get-user-pets", verifyToken, getRegisteredPets);
router.put("/update-user/:id", verifyToken, updateUser);

// Pet routes
router.delete("/delete-pet/:id", verifyToken, deletePet);
router.put("/update-pet-image/:id", verifyToken, upload.single("image"), updatePetImage);

// Add route for updating pet details
router.put("/update-pet/:id", verifyToken, async (req, res) => {
  try {
    const petId = req.params.id;
    const updatedData = req.body;

    // Call the updatePetDetails method from the controller
    const updatedPet = await updatePetDetails(petId, updatedData);

    res.status(200).json({
      success: true,
      message: "Pet details updated successfully.",
      pet: updatedPet,
    });
  } catch (error) {
    console.error("Error updating pet details:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Export the router
export default router;
