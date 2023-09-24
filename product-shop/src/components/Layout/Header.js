import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import cartImage from "../../assets/mealsBackground.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.choise}>
          Make your choise{" "}
          <div className={classes["emoji-container"]}>
            <span className={classes.emoji}>👀</span>
            <span className={classes["emoji-watermelon"]}>🍉</span>
          </div>
        </h1>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={cartImage} alt="meals background" />
      </div>
    </Fragment>
  );
};

export default Header;
