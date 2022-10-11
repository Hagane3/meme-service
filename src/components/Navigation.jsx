import { NavLink } from "react-router-dom";

import { AddMeme } from "./AddMeme";

import classes from "./Navigation.module.css";

export const Navigation = () => {
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
        <AddMeme>Add Meme</AddMeme>
      </ul>
    </nav>
  );
};
