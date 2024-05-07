import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.scss";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 导航回上一页
  };

  return (
    <button onClick={handleBack} className="back-button">
      ⬅
    </button>
  );
};

export default BackButton;
