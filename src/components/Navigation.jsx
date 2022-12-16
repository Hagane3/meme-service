import { useState } from "react";
import { NavLink } from "react-router-dom";

import { AddMemeButton } from "./AddMemeButton";
import { AddMemeModal } from "./AddMemeModal";

import classes from "./Navigation.module.css";

export const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleModalHandler = () => {
    setIsOpened(!isOpened);
  };

  return (
    <nav className={classes}>
      <ul>
        <li>
          <NavLink
            to="/hot"
            className={({ isActive }) =>
              isActive ? classes.active : classes.inactive
            }
          >
            Hot
          </NavLink>
        </li>
        <li>
          <NavLink
            to="regular"
            className={({ isActive }) =>
              isActive ? classes.active : classes.inactive
            }
          >
            Regular
          </NavLink>
        </li>
        <AddMemeButton toggleModalHandler={toggleModalHandler} />
      </ul>
      {isOpened ? <AddMemeModal toggleModalHandler={toggleModalHandler} /> : ""}
    </nav>
  );
};
