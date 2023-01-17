import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="nav__logo">Where in the world?</h1>
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Header;
