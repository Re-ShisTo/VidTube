import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Login from "./Pages/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // console.log("User is logged in", user);
        navigate("/");
      } else {
        // console.log("user is logged out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
