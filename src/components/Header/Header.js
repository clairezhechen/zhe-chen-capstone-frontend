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
      <div className="header__button--wrapper">
        <div className="header__button header__button--recipes">
          <Link to="/recipes">
            <div>
              <h4 className="header__button-content">RECIPES</h4>
            </div>
          </Link>
        </div>
        <div className="header__button header__button--home">
          <Link to="/ ">
            <div>
              <h4 className="header__button-content">HOME</h4>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
