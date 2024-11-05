import "./App.css";

import About from "./components/AboutPage/About";
import Discover from "./components/DiscoverPage/Discover";
import Emergency from "./components/Emergency/Emergency";
import Bleeding from "./components/EmergencyHandling/Bleeding";
import BrokenBones from "./components/EmergencyHandling/Broken";
import Burns from "./components/EmergencyHandling/Burns";
import Choking from "./components/EmergencyHandling/Choking";
import EyeInjury from "./components/EmergencyHandling/EyeInjuries";
import HeatStroke from "./components/EmergencyHandling/HeatStroke";
import Bloating from "./components/EmergencyHandling/PetBloating";
import Poisoning from "./components/EmergencyHandling/Poisoning";
import Seizures from "./components/EmergencyHandling/Seizures";
import Cats from "./components/ManagingIllness/Cats";
import Dogs from "./components/ManagingIllness/Dogs";
import ManagingIllness from "./components/ManagingIllness/ManagingIlness";
import GeneralPetCare from "./components/PetCare/GeneralPetCare";
import DashboardPage from "./components/Profile/Dashboard";
import ForgotPasswordPage from "./components/Profile/ForgotPasswordPage";
import Login from "./components/Profile/Login";
import Profile from "./components/Profile/profile";
import Signup from "./components/Profile/Signup";
import ValidationCode from "./components/Profile/ValidationCode";
import Exercising from "./GeneralPetCare/Exercising";
import Feeding from "./GeneralPetCare/Feeding";
import Grooming from "./GeneralPetCare/Grooming";
import Home from "./main/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import ResetPasswordPage from "./components/Profile/ResetPasswordPage";
import Addpets from "./components/AddPets/Addpets";
import Kilogram from "./components/Kilogram/Kilogram";
import AddBirthdate from "./components/AddBirthdate/AddBirthdate";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          {/*PROFILE */}
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <Signup />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/validation-code"
            element={
              <RedirectAuthenticatedUser>
                <ValidationCode />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <Login />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <RedirectAuthenticatedUser>
                <ForgotPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <RedirectAuthenticatedUser>
                <ResetPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          {/*PROFILE */}
          <Route path="/discover" element={<Discover />} />
          <Route path="/about" element={<About />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/general" element={<GeneralPetCare />} />\
          <Route path="/recognizing" element={<ManagingIllness />} />\
          {/*EMERGENCY HANDLING ROUTES */}
          <Route path="/choking" element={<Choking />} />
          <Route path="/seizures" element={<Seizures />} />
          <Route path="/heat-stroke" element={<HeatStroke />} />
          <Route path="/poisoning" element={<Poisoning />} />
          <Route path="/bleeding" element={<Bleeding />} />
          <Route path="/broken-bones" element={<BrokenBones />} />
          <Route path="/burns" element={<Burns />} />
          <Route path="/eye-injuries" element={<EyeInjury />} />
          <Route path="/bloat" element={<Bloating />} />
          {/*EMERGENCY HANDLING ROUTES */}
          {/*GENERAL PET CARE ROUTES */}
          <Route path="/exercising" element={<Exercising />} />
          <Route path="/feeding" element={<Feeding />} />
          <Route path="/grooming" element={<Grooming />} />
          {/*GENERAL PET CARE ROUTES */}
          {/*RECOGNIZING AND MANAGING ILLNESS ROUTES */}
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/add-pet" element={<Addpets />} />
          <Route path="/kilogram" element={<Kilogram />} />
          <Route path="/addbirthdate" element={<AddBirthdate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
