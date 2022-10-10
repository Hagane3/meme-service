import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={classes}>
      <ul>
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
      </ul>
    </nav>
  );
};
