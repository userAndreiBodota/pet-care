import mongoose from "mongoose";

// Define the Milestone Schema
const milestoneSchema = new mongoose.Schema({
  stage: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

// Define the Pet Schema
const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    owner: { type: String, required: true },
    type: { type: String, enum: ["Dog", "Cat"], required: true },
    weight: { type: Number },
    gender: { type: String, enum: ["Male", "Female"] },
    birthday: { type: Date },
    age: { type: Number },
    image: { type: String },
    milestones: [milestoneSchema], // Embed the milestones array
  },
  { timestamps: true }
);

// Define the User Schema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    lastLogin: { type: Date, default: Date.now },
    isVerified: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
export const Pet = mongoose.model("Pet", petSchema);
