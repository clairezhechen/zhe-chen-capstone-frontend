import axios from "axios";

// const SERVER_URL = "http://localhost:8080";
export const SERVER_URL = "http://localhost:8080";

export const fetchAllRecipes = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/api/recipes/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const fetchRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/api/recipes/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw error;
  }
};

/**
 * Post a new comment to a specific recipe.
 * @param {string} recipeId - The ID of the recipe to which the comment will be posted.
 * @param {string} commentText - The text of the comment to be posted.
 * @param {string} authorText - The text of the comment to be posted.
 */
export const postComment = async (recipeId, authorText, commentText) => {
  console.log(
    `Sending POST request to ${SERVER_URL}/api/recipes/${recipeId}/comments`
  );
  console.log("Payload:", { author: authorText, comment: commentText });
  try {
    const response = await axios.post(
      `${SERVER_URL}/api/recipes/${recipeId}/comments`,
      {
        author: authorText,
        comment: commentText, // 假设后端需要一个名为 'comment' 的字段
        // 如果需要更多字段，如 'author', 'date', 等，你可以在这里添加
      }
    );
    return response.data; // 返回后端响应的数据
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error; // 把错误抛出，让调用函数处理错误
  }
};
