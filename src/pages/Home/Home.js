import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <h1 className="main-title">Welcome to Recipe Delight</h1>
        <p className="main-subtitle">
          Explore the best recipes from around the world.
        </p>
        <Link to="/recipes" className="start-button">
          Let's Start the Trip
        </Link>
      </div>
      <div className="home__intro">
        <h2 className="home__intro--title">Recipes Delight</h2>
        <p>
          Discover a world of flavors with our curated selection of delightful
          recipes that promise to inspire your culinary journey and transform
          ordinary meals into extraordinary experiences.
        </p>
      </div>
    </div>
  );
}

export default Home;
