import React from "react";
import "./style.scss";
import Header from "./Components/customers/Header/Header";
import Sidebar from "./Components/customers/sidebar/Sidebar";
import Category from "./Components/customers/Category/Category";
import Products from "./Components/customers/Products/Products";
import Footer from "./Components/customers/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/customers/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
