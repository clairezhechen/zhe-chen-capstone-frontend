import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <h1>Welcome to Recipe Delight</h1>
        <p>Explore the best recipes from around the world.</p>
        <Link to="/recipes" className="start-button">
          Let's Start the trip
        </Link>
      </div>
    </div>
  );
}

export default Home;
