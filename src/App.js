import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  function goAuth() {
    navigate({ pathname: "/auth/sign_up" });
  }
  useEffect(() => {
    goAuth();
  }, []);
  return (
    <div className="bg-secondaryColor font-Poppins h-[100vh]">
      <Routes>
        <Route path="/auth/sign_up" element={<SignUp />} />
        <Route path="/auth/sign_in" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
