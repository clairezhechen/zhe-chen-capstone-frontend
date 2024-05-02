import { fetchAllRecipes } from "../../utils/functions";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Recipe.scss";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loading/Loading";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // 初始化时即设置为加载状态
  const [filteredItems, setFilteredItems] = useState([]);
  const [error, setError] = useState(""); // 添加用于存储错误信息的状态

  useEffect(() => {
    loadAllRecipes();
  }, []);

  const loadAllRecipes = async () => {
    try {
      const response = await fetchAllRecipes();
      setRecipes(response);
      setFilteredItems(response);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError("Failed to fetch recipes."); // 设置错误信息
    } finally {
      setLoading(false); // 确保无论成功还是失败都会停止加载动画
      console.log("Loading state set to false.");
    }
  };

  const handleSearchChange = (searchTerm) => {
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRecipes(filtered);
  };
  console.log(recipes);
  return (
    <>
      {loading ? (
        <div className="center">
          <Loading />
        </div>
      ) : error ? ( // 检查是否有错误，并显示错误信息
        <div className="error-message">{error}</div>
      ) : (
        <div className="recipe-container">
          <div>
            <SearchBar onSearchChange={handleSearchChange} />
          </div>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                <RecipeCard recipe={recipe} />
              </Link>
            ))
          ) : (
            <p>No recipes found.</p> // 当没有食谱时显示信息
          )}
        </div>
      )}
    </>
  );
};

export default Recipe;
