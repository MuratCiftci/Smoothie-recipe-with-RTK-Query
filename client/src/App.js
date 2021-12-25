import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDetailPage";
import Recipes from "./pages/AllRecipes/Recipes";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Write from "./pages/writeRecipe/Write";


export const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};
