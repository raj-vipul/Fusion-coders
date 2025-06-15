import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ChatSurvey from "./pages/ChatSurvey";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientOverview from "./pages/PatientOverview";


function App() {

  console.log("App Loaded");
  

  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatSurvey />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
        <Route path="/patient/:id" element={<PatientOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
