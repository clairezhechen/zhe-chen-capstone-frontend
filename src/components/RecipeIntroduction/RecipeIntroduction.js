import React from "react";
import "./RecipeIntroduction.scss";

const RecipeIntroduction = ({ recipe }) => {
  if (!recipe || !recipe.introductions) {
    return <p>Loading or no introduction available...</p>;
  }
  function splitIntoParagraphs(text) {
    let cleanedText = text.replace(/\\r|\\n/g, "");
    let paragraphs = cleanedText.split(/\n\s*\n/);
    return paragraphs;
  }
  const paragraphs = splitIntoParagraphs(recipe?.introductions);
  console.log(recipe?.introductions);
  console.log("paragraph", paragraphs);

  return (
    <div className="paragraph">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default RecipeIntroduction;
