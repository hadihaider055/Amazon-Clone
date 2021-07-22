import React from "react";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__search__input" />
        <SearchIcon className="header__search__icon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option__lineOne">Hello Guest</span>
          <span className="header__option__lineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option__lineOne">Returns</span>
          <span className="header__option__lineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option__lineOne">Your</span>
          <span className="header__option__lineTwo">Prime</span>
        </div>
        <div className="header__option__basket">
          <ShoppingBasketIcon />
          <span className="header__option__lineTwo header__basket__count">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
