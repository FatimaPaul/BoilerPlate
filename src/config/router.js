import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "../pages/signup";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
