import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import ViewBooks from "./Pages/ViewBooks";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<ViewBooks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={< Cart />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}
export default App