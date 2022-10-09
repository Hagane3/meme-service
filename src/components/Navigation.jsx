import { NavLink } from "react-router-dom";

import classes from "./Navigaton.module.css";

export const Navigation = () => {
  return (
    <nav className={classes}>
      <ul>
        <li>
          <NavLink to="/hot">Hot</NavLink>
        </li>
        <li>
          <NavLink to="regular">Regular</NavLink>
        </li>
      </ul>
    </nav>
  );
};
