import { create } from "zustand";
import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/auth"
    : "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null, // Load user from localStorage

  // user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,
  petImage: null,
  pets: [],

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  setAuthenticated: (value) => {
    localStorage.setItem("isAuthenticated", value ? "true" : "false");
    set({ isAuthenticated: value });
  },
  clearAuth: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    set({ user: null, isAuthenticated: false });
  },

  setPetImage: (image) => set({ petImage: image }),

  registerPetStage1: async (name, type, breed, image, owner) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/add-pet-stage1`, {
        name,
        type,
        breed,
        image,
        owner,
      });
      set({ isLoading: false, message: "Pet Stage 1 registered successfully" });
      return response.data.petId;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error registering pet stage 1",
        isLoading: false,
      });
      throw error;
    }
  },

  registerPetStage2: async (petId, gender, weight) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/add-pet-stage2`, {
        petId,
        gender,
        weight,
      });
      set({ isLoading: false, message: "Pet details updated successfully" });
      return response.data;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error updating pet details",
        isLoading: false,
      });
      throw error;
    }
  },

  registerPetStage3: async (petId, birthday, age) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/add-pet-stage3`, {
        petId,
        birthday,
        age,
      });
      set({
        isLoading: false,
        message: "Pet birthday and age updated successfully",
      });
      return response.data;
    } catch (error) {
      set({
        error:
          error.response?.data?.message ||
          "Error updating pet's birthday and age",
        isLoading: false,
      });
      throw error;
    }
  },

  getRegisteredPets: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/get-user-pets`);
      console.log(response.data.pets);
      set({ pets: response.data.pets, isLoading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error fetching pets",
        isLoading: false,
      });
    }
  },
  deletePet: async (petId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.delete(`${API_URL}/delete-pet/${petId}`);
      set((state) => ({
        pets: state.pets.filter((pet) => pet._id !== petId),
        isLoading: false,
        message: response.data.message || "Pet deleted successfully",
      }));
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Error deleting pet",
      });
      throw error;
    }
  },

  signup: async (email, password, name, contactNo, dob, address) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
        contactNo,
        dob,
        address,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      set({
        isAuthenticated: true,
        user: response.data.user,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({
        user: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
        petImage: null,
      });
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify`, { code });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/forgot`, {
        email,
      });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error:
          error.response?.data?.message || "Error sending reset password email",
      });
      throw error;
    }
  },

  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, {
        password,
      });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "Error resetting password",
      });
      throw error;
    }
  },

  updateUser: async (userData) => {
    try {
      const response = await axios.put(`${API_URL}/update`, userData);
      set((state) => ({ user: { ...state.user, ...userData } }));
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },

  addMilestone: async (petId, base64Image) => {
    set({ isLoading: true, error: null });

    try {
      const formData = new FormData();
      formData.append("image", base64Image); // Append the image to FormData

      // Send the request to the server
      const response = await axios.post(
        `${API_URL}/pets/${petId}/milestones`, // Ensure this is the correct API endpoint
        formData
      );

      // Assuming the server returns an image URL
      const uploadedImageUrl = response.data.imageUrl;

      set({ isLoading: false, message: response.data.message });

      return uploadedImageUrl; // Return the image URL to be used in the UI
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error uploading image",
        isLoading: false,
      });
      throw error;
    }
  },

  getMilestones: async (petId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/pets/${petId}/milestones`);
      set({ milestones: response.data.milestones, isLoading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error fetching milestones",
        isLoading: false,
      });
    }
  },
}));
