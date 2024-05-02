import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails, postComment } from "../../utils/functions";

const RecipeDetail = () => {
  const { recipeId } = useParams(); // 从URL获取recipeId
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRecipeDetails = async () => {
      try {
        const data = await fetchRecipeDetails(recipeId);
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching recipe details:", err);
        setError("Failed to load recipe details.");
      } finally {
        setLoading(false);
      }
    };

    loadRecipeDetails();
  }, [recipeId]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const commentInput = event.target.elements[0]; // Assuming the first element is the input
    try {
      await postComment(recipeId, commentInput.value);
      commentInput.value = ""; // Clear the input after submission
      // Optionally refresh comments or append to list
    } catch (error) {
      console.error("Failed to post comment:", error);
      setError("Failed to post comment.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>No recipe found!</p>;

  const comments = recipe.comments ? recipe.comments.split(",") : [];
  const authors = recipe.authors ? recipe.authors.split(",") : [];

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.dish_image} alt={recipe.name} />
      <p>{recipe.introductions}</p>
      <div>
        <h3>Rating:</h3>
        <div>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              style={{ color: index < recipe.average_rating ? "gold" : "grey" }}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3>Comments:</h3>
        <div>
          <h3>Add a Comment:</h3>
          <form onSubmit={handleCommentSubmit}>
            <input type="text" placeholder="author" />
            <input type="text" placeholder="Your comment" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{`${authors[index]}: ${comment}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
