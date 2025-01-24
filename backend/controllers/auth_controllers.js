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

export const registerPetStage3 = async (req, res) => {
  const { petId, birthday, age } = req.body;

  try {
    if (!petId || !birthday || age === undefined) {
      throw new Error("All fields (petId, birthday, age) are required.");
    }

    const birthDate = new Date(birthday);

    const pet = await Pet.findById(petId);
    if (!pet) {
      throw new Error("Pet not found.");
    }

    pet.birthday = birthDate;
    pet.age = age;
    await pet.save();

    res.status(200).json({
      success: true,
      message: "Pet birthday and age updated successfully.",
      pet,
    });
  } catch (error) {
    console.error("Error in registerPetStage3:", error.message);
    res.status(400).json({ success: false, message: error.message });
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
<<<<<<< HEAD
  try {
    const petId = req.params.id;
    const { stage, description, imageUrl } = req.body; // Accept the Base64 string directly

    if (!imageUrl) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Convert Base64 to Buffer and save it as a file
    const base64Data = imageUrl.replace(/^data:image\/\w+;base64,/, ""); // Remove the metadata part
    const buffer = Buffer.from(base64Data, "base64");
    const filename = `milestone-${Date.now()}.jpg`; // Generate a filename (you can also save it with a unique name)
    const filePath = path.join(__dirname, "uploads", filename); // Save to uploads folder (make sure it's writable)

    fs.writeFileSync(filePath, buffer); // Write the image to file system

    const milestone = {
      stage,
      description,
      imageUrl: `/uploads/${filename}`, // Save the file path in the database
    };

    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
=======
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
>>>>>>> 7e2fedb29bad537df0bbc9432fbc09c1f93f6b42

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
  const { name, contactNo, dob, address } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.contactNo = contactNo || user.contactNo;
    user.dob = dob || user.dob;
    user.address = address || user.address;
    user.email = email || user.email;
    user.gender = gender || user.gender;

    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update user" });
  }
};
