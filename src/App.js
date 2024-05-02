import React, { useState } from "react"; // React core and useState hook
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Routing components

// Component imports
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import NotFoundPage from "./pages/Error/Error";
import Footer from "./components/Footer/Footer";

import "./App.css"; // Stylesheet import

function App() {
  // Application state for loading status, search query, and recipes list
  // const [isLoading, setIsLoading] = useState(false);
  // const [query, setQuery] = useState("");
  // const [recipes, setRecipes] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
