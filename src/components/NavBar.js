import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { CgShoppingCart } from "react-icons/cg";
import cartContext from "./context/Context";
import Dropdown from "./Dropdown";

function NavBar() {
  const dropDownStyle = {
    right: 0,
    left: "auto",
    maxHeight: "500px",
  };
  const {
    state: { cart },
  } = useContext(cartContext);
  return (
    <nav className="navbar sticky-top" style={{ background: "#383838" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} width={40} alt="logo" />
          <span className="fw-bold" style={{ color: "#c463e8" }}>
            {" "}
            Shopping
          </span>
        </Link>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Searching product hear"
          aria-label="Search"
          style={{ width: "500px" }}
        />
        <div className="btn-group">
          <button
            className="btn btn-success dropdown-toggle"
            type="button"
            id="dropdownMenuClickableInside"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <CgShoppingCart color="#fff" fontSize="25px" />
            {cart.length}
          </button>
          <ul
            className="dropdown-menu overflow-auto"
            aria-labelledby="dropdownMenuClickableInside"
            style={dropDownStyle}
          >
            <Dropdown />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
