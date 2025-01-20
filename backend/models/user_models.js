import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

const milestoneSchema = new mongoose.Schema({
  stage: { type: String, required: true },
  description: { type: String, required: false },
  imageUrl: { type: String, required: false },
});
const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    owner: { type: String, required: true },
    type: { type: String, enum: ["Dog", "Cat"], required: true },
    weight: { type: Number, required: false },
    gender: { type: String, enum: ["Male", "Female"], required: false },
    birthday: { type: Date, required: false },
    age: { type: Number, required: false },
    image: { type: String, required: false },
    milestoneSchema: [milestoneSchema],
  },
  { timestamps: true }
);

export const Pet = mongoose.model("Pet", petSchema);
