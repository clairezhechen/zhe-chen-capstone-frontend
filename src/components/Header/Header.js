import "./Header.scss";
import { Link } from "react-router-dom";
import recipedelightlogo from "../../assets/Logo/logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={recipedelightlogo}
          width={70}
          alt="headerlogo"
          className="header__logo"
        />
        <div>
          <h3>Recipe Delight</h3>
        </div>
      </Link>
      <div className="header__button">
        <Link to="/recipes">
          <div>
            <h4>RECIPES</h4>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
