import { Pet, User } from "../models/user_models.js";
import crypto from "crypto";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../mailtrap/emails.js";

export const signup = async (req, res) => {
  const { email, password, name, dob, contactNo, address } = req.body;
  try {
    if (!email || !password || !name || !dob || !contactNo || !address) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      contactNo,
      dob,
      address,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();

    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User created Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();

    await sendWelcomeEmail(user.email, user.name);
    res.status(200).json({
      success: true,
      message: "Email verified Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("Errorin Login  ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged Out Successfully" });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;

    await user.save();

    await sendPasswordResetEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password/${resetToken}`
    );
    res.status(200).json({
      success: true,
      message: "Password reset link sent to your email",
    });
  } catch (error) {
    console.log("Error in forgot Password", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired reset token" });
    }

    // update password
    const hashedPassword = await bcryptjs.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();

    await sendResetSuccessEmail(user.email);

    res
      .status(200)
      .json({ success: true, message: "Password reset successful" });
  } catch (error) {
    console.log("Error in resetPassword ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const checkAuth = async (req, res) => {
  try {
    // Allow CORS for this specific route
    res.header("Access-Control-Allow-Origin", "*"); // or specify the frontend domain
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};


export const registerPetStage1 = async (req, res) => {
  const { name, type, breed, owner, image } = req.body;

  try {
    if (!name || !type || !breed || !image) {
      throw new Error("All fields (name, type, breed, image) are required.");
    }

    const base64Pattern = /^data:image\/(png|jpg|jpeg);base64,/;
    if (!base64Pattern.test(image)) {
      throw new Error(
        "Invalid image format. Please upload a PNG, JPG, or JPEG image."
      );
    }

    const pet = new Pet({ name, type, breed, owner, image });
    await pet.save();

    res.status(201).json({
      success: true,
      message: "Pet initially registered successfully.",
      petId: pet._id,
    });
  } catch (error) {
    console.error("Error in registerPetStage1:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const registerPetStage2 = async (req, res) => {
  const { petId, gender, weight } = req.body;

  try {
    if (!petId || !gender || weight === undefined) {
      throw new Error("All fields (petId, gender, weight) are required.");
    }

    // Find the pet by ID and update gender and weight
    const pet = await Pet.findById(petId);
    if (!pet) {
      throw new Error("Pet not found.");
    }

    pet.gender = gender;
    pet.weight = weight;
    await pet.save();

    res.status(200).json({
      success: true,
      message: "Pet details updated successfully.",
      pet,
    });
  } catch (error) {
    console.error("Error in registerPetStage2:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

//ADJUSTED FOR AGE DISPLAY
export const registerPetStage3 = async (req, res) => {
  const { petId, birthday, age } = req.body;

  try {
    // Validate all required fields
    if (!petId || !birthday || age === undefined) {
      return res.status(400).json({
        success: false,
        message: "All fields (petId, birthday, age) are required.",
      });
    }

    // Validate and parse the birthday
    const birthDate = new Date(birthday);
    if (isNaN(birthDate.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid birthday format. Please provide a valid date.",
      });
    }

    // Find the pet by ID
    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found.",
      });
    }

    // Update the pet's birthday and age
    pet.birthday = birthDate;
    pet.age = age; // Ensure this is a string (e.g., '2 years') or a number if needed
    await pet.save();

    // Respond with success
    res.status(200).json({
      success: true,
      message: "Pet birthday and age updated successfully.",
      pet,
    });
  } catch (error) {
    console.error("Error in registerPetStage3:", error.message);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred. Please try again.",
    });
  }
};

export const getRegisteredPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json({
      success: true,
      pets,
    });
  } catch (error) {
    console.error("Error fetching registered pets:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch registered pets",
    });
  }
};

//UPDATE PET DETAILS
export const updatePetDetails = async (petId, updatedData) => {
  try {
    const pet = await Pet.findById(petId);
    if (!pet) {
      throw new Error("Pet not found");
    }

    // Update the pet fields with the provided data
    pet.name = updatedData.name || pet.name;
    pet.breed = updatedData.breed || pet.breed;
    pet.gender = updatedData.gender || pet.gender;
    pet.weight = updatedData.weight || pet.weight;
    pet.birthday = updatedData.birthday || pet.birthday;
    pet.age = updatedData.age || pet.age;
    pet.image = updatedData.image || pet.image;

    // Save the updated pet
    await pet.save();
    return pet;
  } catch (error) {
    throw new Error(error.message);
  }
};

//UPDATE PET IMAGE
export const updatePetImage = async (req, res) => {
  try {
    const petId = req.params.id;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Update the pet image in the database
    const updatedPet = await Pet.findByIdAndUpdate(
      petId,
      { image: file.path }, // Assuming the image path is stored
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Pet image updated successfully.",
      pet: updatedPet,
    });
  } catch (error) {
    console.error("Error updating pet image:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMilestones = async (req, res) => {
  try {
    const milestones = await Milestone.find(); // Fetch all milestones from the database
    res.status(200).json({
      success: true,
      milestones,
    });
  } catch (error) {
    console.error("Error fetching milestones:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch milestones",
    });
  }
};

export const deletePet = async (req, res) => {
  const { id } = req.params;

  try {
    const pet = await Pet.findByIdAndDelete(id);

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.status(200).json({ message: "Pet deleted successfully", pet });
  } catch (error) {
    console.error("Error deleting pet:", error);
    res.status(500).json({ message: "Failed to delete the pet" });
  }
};

// Controller
export const addMilestone = async (req, res) => {
  const { id } = req.params; // Pet ID from the URL
  const { stage, description } = req.body; // Stage and description from the request body
  const imageUrl = req.file ? req.file.path : null; // File path if uploaded

  try {
    const pet = await Pet.findById(id); // Find the pet by ID
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    // Add a new milestone to the milestones array
    const newMilestone = { stage, description, imageUrl };
    pet.milestones.push(newMilestone);

    pet.milestoneSchema.push(milestone); // Push new milestone to the pet
    await pet.save();

    res.status(201).json({
      message: "Milestone added successfully",
      pet,
    });
  } catch (err) {
    console.error("Error adding milestone:", err);
    res.status(500).json({
      message: "Error adding milestone",
      error: err.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from URL
    const updates = req.body; // Get updated data from request body

    // Assume you have a User model connected to your database
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update user" });
  }
};
