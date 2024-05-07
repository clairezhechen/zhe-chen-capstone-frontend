import React from "react";
import "./RecipeCard.scss";
const RecipeCard = ({ recipe }) => {
  return (
    <>
      <div className="card">
        <img src={recipe.dish_image} alt={recipe.name} className="card-image" />
        <div className="card-body">
          <span className="category">{recipe.category}</span>
          <h3 className="recipe-name">{recipe.name}</h3>
          <a
            className="card__button"
            href={"https://www.themealdb.com/meal/" + recipe.id}
            target="_blank"
          >
            VIEW RECIPE
          </a>
          <h3 className="card-rate">
            ★{parseFloat(recipe.average_rating).toFixed(1)}
          </h3>
          <h3 className="card-serve">{recipe.serve}</h3>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
