import React from 'react';
import logo from './IconTwitch.svg';
import search from './Search.svg';
import menuico from './MenuIco.svg';

function Header(){
  return (
    <div>
      <nav className="headerTop">
        <ul className="listMenu">
          <li className="linkNav">
            <img src={logo} alt="logo twitch" className="logo"/>
          </li>
          <li className="linkNav">
            Top games
          </li>
          <li className="linkNav">
            Top streams
          </li>
          <li className="linkNav">
            <form className="formSubmit">
              <input type="text" className="inputSearch"/>
              <button type="submit">
                <img src={search} alt="magnifier icon" className="logoMagnifier"/>
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="menuResBtn">
        <img src={menuico} alt="responsive menu icon" className="menuIco"/>
      </div>
    </div>
  )
}

export default Header;