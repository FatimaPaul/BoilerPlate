import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "../pages/signup";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import BloodBank from "../pages/bloodBank";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="bloodBank" element={<BloodBank />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
