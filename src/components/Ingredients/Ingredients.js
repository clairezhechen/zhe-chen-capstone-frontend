import React from "react";
import "./Ingredients.scss";

const Ingredients = ({ recipe }) => {
  if (!recipe) {
    return <p>Loading ingredients...</p>;
  }

  // 提取并渲染所有以 "ingredients_" 开头的属性
  return (
    <div className="ingredients">
      <div className="ingredients__subheader">INGREDIENTS</div>
      <div className="ingredients-wrapper">
        {Array.from({ length: 15 }).map((_, index) => {
          const ingredientKey = `ingredients_${index + 1}`;
          const measureKey = `measure_${index + 1}`;
          const ingredient = recipe[ingredientKey];
          const measure = recipe[measureKey];

          return ingredient ? (
            <div className="ingredient-item" key={index}>
              <span className="ingredient">{ingredient}</span>
              <span className="measure">{measure}</span>
            </div>
          ) : null; // 如果没有这个成分则不显示
        })}
      </div>
    </div>
  );
};

export default Ingredients;
