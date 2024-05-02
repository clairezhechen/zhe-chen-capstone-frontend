import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <>
      <div className="card">
        <img src={recipe.dish_image} alt={recipe.name} className="card-image" />
        <div className="card-body">
          <span className="category">{recipe.category}</span>
          <h3>{recipe.name}</h3>
          <a
            href={"https://www.themealdb.com/meal/" + recipe.id}
            target="_blank"
          >
            VIEW RECIPE
          </a>
          <h3>{recipe.average_rating}</h3>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
