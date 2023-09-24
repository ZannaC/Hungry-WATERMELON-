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
          <div class={classes["emoji-container"]}>
            <span class={classes.emoji}>👀</span>
            <span class={classes["emoji-watermelon"]}>🍉</span>
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
