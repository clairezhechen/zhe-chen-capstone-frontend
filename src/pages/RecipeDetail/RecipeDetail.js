import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// 这个里面的postRating已经没有用了
import {
  fetchRecipeDetails,
  postComment,
  postRating,
} from "../../utils/functions";
import "./RecipeDetail.scss";
import chefavatar from "../../assets/Images/img3.jpg";
import RecipeRating from "../../components/RecipeRating/RecipeRating";
import RecipeYoutube from "../../components/RecipeYoutube/RecipeYoutube";
import BackButton from "../../components/BackButton/BackButton";
import Ingredients from "../../components/Ingredients/Ingredients";
import RecipeIntroduction from "../../components/RecipeIntroduction/RecipeIntroduction";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRecipeDetails = async () => {
      try {
        const data = await fetchRecipeDetails(recipeId);
        console.log("Received data:", data);
        if (!data || !Array.isArray(data.comments)) {
          throw new Error("Recipe data is incomplete.");
        }
        console.log(data, "shift8");
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
    const authorInput = document.getElementById("authorInput");
    const commentInput = document.getElementById("commentInput");
    try {
      await postComment(recipeId, authorInput.value, commentInput.value);
      const updatedData = await fetchRecipeDetails(recipeId);
      setRecipe(updatedData);
      authorInput.value = "";
      commentInput.value = "";
    } catch (error) {
      console.error("Failed to post comment:", error);
      setError("Failed to post comment.");
    }
  };
  // 之前的rating版本，现在已经没用了。
  // const handleRating = async (rating) => {
  //   try {
  //     await postRating(recipeId, rating);
  //     alert("Rating submitted successfully!");
  //     const updatedRecipe = await fetchRecipeDetails(recipeId);
  //     if (!updatedRecipe) {
  //       throw new Error("Failed to fetch updated recipe details.");
  //     }
  //     updatedRecipe.average_rating = parseFloat(updatedRecipe.average_rating);
  //     console.log("Updated recipe with new rating:", updatedRecipe);
  //     setRecipe(updatedRecipe);
  //     console.log("Updated recipe:", updatedRecipe); // 确认收到的数据是否正确
  //   } catch (error) {
  //     console.error("Error submitting rating:", error);
  //     setError("Failed to submit rating.");
  //   }
  // };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>No recipe found!</p>;

  return (
    <div className="recipe__detail">
      <div className="recipe__detail-upper">
        <div className="recipe__detail-header">
          <div className="back-button">
            <BackButton />{" "}
          </div>
          <h1 className="recipe__name">{recipe.name}</h1>
        </div>
        <div className="recipe__detail-lower">
          <img
            className="recipe__dish-img"
            src={recipe.dish_image}
            alt={recipe.name}
          />
          <div className="recipe__detail--lower-right">
            <div className="ingredients-list">
              <Ingredients recipe={recipe} />
            </div>
            <p className="recipe-tags">Tags: {recipe.tags}</p>
            <p className="recipe-area">Area: {recipe.area}</p>
          </div>
        </div>
      </div>
      <div className="recipe__intro-wrapper">
        <div className="recipe__intro-title">DIRECTIONS</div>
        <RecipeIntroduction recipe={recipe} />
      </div>

      <div className="recipe-youtube">
        <h1 className="youtube-title">SEE IT IN THE KITCHEN</h1>
        {recipe.dish_youtube && (
          <RecipeYoutube videoUrl={recipe.dish_youtube} />
        )}
      </div>
      <RecipeRating recipeId={recipeId} initialRating={recipe.average_rating} />
      {/* 之前的版本 */}
      {/* <div className="rates">
        <h3>RATE RECIPE</h3>
        <div>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`rates-star ${
                index < Math.ceil(parseFloat(recipe.average_rating))
                  ? "active"
                  : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => handleRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
      </div> */}
      <div className="comments">
        <h3 className="comments-title">LEAVE A COMMENT</h3>
        <div>
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <label className="comment-label">AUTHOR</label>
            <input
              className="comment__input-author"
              id="authorInput"
              type="text"
              placeholder="Name"
            />
            <label className="comment-label">COMMENT</label>
            <textarea
              className="comment__input-comment"
              id="commentInput"
              type="text"
              placeholder="What did you think about this recipe?  "
              rows={"4"}
              cols={"50"}
            />
            <button className="comment-button" type="submit">
              POST COMMENT
            </button>
          </form>
        </div>
        <ul className="comment-list">
          {recipe.comments.map((comment) => (
            <li className="comment-wrapper" key={comment.id}>
              <img
                src={chefavatar}
                alt="Default User Photo"
                className="user-photo"
              />
              <div className="comment-right">
                <div className="comment-author">{comment.author}</div>
                <div className="comment-text">{comment.comment}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
