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
import Exercising from "./GeneralPetCare/Exercising";
import Feeding from "./GeneralPetCare/Feeding";
import Grooming from "./GeneralPetCare/Grooming";
import Home from "./main/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
