import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RecipeRating.scss";

export const SERVER_URL = "http://localhost:8080";

const RateRecipe = ({ recipeId, initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  // 监控评分状态的变化
  useEffect(() => {
    console.log("Updated rating state to:", rating); // 当评分状态更新后打印新的状态
  }, [rating]);

  // 处理评分变更
  const handleRatingChange = async (newRating) => {
    console.log("Sending rate:", newRating, "to recipe:", recipeId); // 显示将要发送的评分和菜谱ID
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/recipes/${recipeId}/ratings`,
        { rate: newRating } // 注意修改这里的字段名为服务器期望的字段名
      );
      console.log("Rating updated successfully", response.data); // 响应成功时的数据
      setRating(newRating); // 更新本地状态以反映新的评分
      toast.success("Rating updated successfully!"); // 显示成功通知
    } catch (error) {
      console.error("Failed to update rating", error);
      if (error.response) {
        // 打印出从服务器返回的具体错误信息
        console.log("Error data:", error.response.data);
        console.log("Status code:", error.response.status);
        toast.error(`Failed to update rating: ${error.response.statusText}`); // 显示错误通知
      } else {
        toast.error("Failed to update rating"); // 显示错误通知
      }
    }
  };

  // 组件渲染
  return (
    <div className="recipe-rating">
      <ToastContainer autoClose={3000} position="top-center" />
      <h1 className="rating-title">RATE RECIPE</h1>
      <StarRatings
        rating={parseFloat(rating)}
        starRatedColor="gold"
        changeRating={handleRatingChange}
        numberOfStars={5}
        name="recipeRating"
        starDimension="2.5rem" // 设置星星的大小
        starSpacing="0.5rem" // 可选，设置星星之间的间距
      />
    </div>
  );
};

export default RateRecipe;
