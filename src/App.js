import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import { useContext, useEffect } from "react";
import Pollutants from "./pages/pollutants";
import MainLayout from "./components/MainLayout";
import { pollutantsContext } from "./state/context/pollutants";
import Loader from "./components/Loader";
import AddDevice from "./pages/AddDevice";

function App() {
  const { profile, userId } = useContext(pollutantsContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  console.log(path, "this is the path");

  function goAuth() {
    // navigate({ pathname: "/auth/sign_up" });
  }
  useEffect(() => {
    goAuth();
  }, []);

  // checking if profile has loaaded
  if (!Object.keys(profile).length && path !== "/auth/sign_up") {
    return <Loader />;
  }
  return (
    <div className={`bg-secondaryColor font-Poppins h-auto`}>
      <Routes>
        <Route path="/auth/sign_up" element={<SignUp />} />
        {/* <Route path="/auth/sign_in" element={<SignIn />} /> */}

        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pollutant_readings" element={<Pollutants />} />
          <Route path="/add_device" element={<AddDevice />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
