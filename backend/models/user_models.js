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
    age: { type: String },
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

// Static method to update user details
userSchema.statics.updateUserDetails = async function (userId, updatedData) {
  try {
    // Find the user by ID and update the details
    const updatedUser = await this.findByIdAndUpdate(
      userId,
      { $set: updatedData }, // Set the updated fields
      { new: true, runValidators: true } // Return the updated user and validate input
    );
    return updatedUser;
  } catch (error) {
    throw new Error(`Error updating user details: ${error.message}`);
  }
};

// Static method to update pet details
petSchema.statics.updatePetDetails = async function (petId, updatedData) {
  try {
    // Find the pet by ID and update the details
    const pet = await this.findById(petId);
    if (!pet) {
      throw new Error("Pet not found.");
    }

    // Update fields if provided
    if (updatedData.name) pet.name = updatedData.name;
    if (updatedData.breed) pet.breed = updatedData.breed;
    if (updatedData.gender) pet.gender = updatedData.gender;
    if (updatedData.weight !== undefined) pet.weight = updatedData.weight;
    if (updatedData.image) pet.image = updatedData.image;
    if (updatedData.birthday) pet.birthday = new Date(updatedData.birthday);
    if (updatedData.age !== undefined) pet.age = updatedData.age;

    // Save the updated pet details
    await pet.save();

    return pet;
  } catch (error) {
    throw new Error(`Error updating pet details: ${error.message}`);
  }
};

export const User = mongoose.model("User", userSchema);
export const Pet = mongoose.model("Pet", petSchema);
