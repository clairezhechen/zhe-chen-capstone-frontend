import React from "react";
import "./RecipeYoutube.scss";
const RecipeYoutube = ({ videoUrl }) => {
  const videoId = videoUrl.split("v=")[1]; // 从视频URL中提取视频ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`; // 构建缩略图URL

  return (
    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
      <img
        className="youtube-img"
        src={thumbnailUrl}
        alt="Watch on YouTube"
        style={{ maxWidth: "100%" }}
      />
    </a>
  );
};

export default RecipeYoutube;
