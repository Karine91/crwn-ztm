import { NavLink, Link } from "react-router";
import CrwnLogo from "../../../assets/crown.svg?react";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="logo-container">
        <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <NavLink to="/shop" className="nav-link">
          SHOP
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
