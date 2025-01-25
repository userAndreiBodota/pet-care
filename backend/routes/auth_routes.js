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
  updateUser, // Correctly imported here
  verifyEmail,
  updatePetDetails, // Add this import
  updatePetImage,
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
router.get("/get-user-pets", getRegisteredPets);
router.put("/update-user/:id", verifyToken, updateUser); // Route for updating user details

// Pet routes
router.delete("/delete-pet/:id", deletePet);
// router.post("/pets/:id/milestones", upload.single("image"), addMilestone);
router.put("/update-pet-image/:id", verifyToken, upload.single("image"), updatePetImage);

// router.post("/pets/:id/milestones", upload.single("image"), addMilestone);

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

export default router;
