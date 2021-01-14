import React from "react";
import logo from "./IconTwitch.svg";
import search from "./Search.svg";
import menuico from "./MenuIco.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="headerTop">
        <ul className="listMenu">
          <li className="linkNav">
            <Link className="link" to="/">
              <img src={logo} alt="logo twitch" className="logo" />
            </Link>
          </li>
          <li className="linkNav">
            <Link className="link" to="/">
              Top games
            </Link>
          </li>
          <li className="linkNav">
            <Link className="link" to="/top-streams">
              Top streams
            </Link>
          </li>
          <li className="linkNav">
            <form className="formSubmit">
              <input type="text" className="inputSearch" />
              <button type="submit">
                <img
                  src={search}
                  alt="magnifier icon"
                  className="logoMagnifier"
                />
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="menuResBtn">
        <img src={menuico} alt="responsive menu icon" className="menuIco" />
      </div>
    </>
  );
}

export default Header;
