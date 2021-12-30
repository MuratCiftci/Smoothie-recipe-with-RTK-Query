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

import { useAuth } from "./hooks/useAuth";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import UserRecipes from "./pages/UserRecipes/UserRecipes";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/recipes/:user" element={<UserRecipes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<PrivateRoute Component={Write} /> } />
      </Routes>
      </div>
    </BrowserRouter>
  );
};
