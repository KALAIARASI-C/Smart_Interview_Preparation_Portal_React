import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Coding from "./pages/Coding";
import Aptitude from "./pages/Aptitude";
import Contact from "./pages/Contact";
import MockInterview from "./pages/MockInterview";
import CompanyPreparation from "./pages/CompanyPreparation";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import CodingQuestions from "./pages/CodingQuestions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/coding" element={<Coding />} />
      <Route path="/aptitude" element={<Aptitude />} />
      <Route path="/mock-interview" element={<MockInterview />} />
      <Route path="/company-preparation" element={<CompanyPreparation />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/coding/:language" element={<CodingQuestions />} />
    </Routes>
  );
}

export default App;