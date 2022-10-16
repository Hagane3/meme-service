import { useState } from "react";
import { NavLink } from "react-router-dom";

import { AddMemeButton } from "./AddMemeButton";
import { AddMemeModal } from "./AddMemeModal";

import classes from "./Navigation.module.css";

export const Navigation = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const openModalHandler = () => {
    if (!isOpened) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
    console.log(isOpened);
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
        <AddMemeButton openModalHandler={openModalHandler} />
      </ul>
      {isOpened ? (
        <AddMemeModal
          database={props.database}
          setDatabase={props.setDatabase}
          openModalHandler={openModalHandler}
        />
      ) : (
        ""
      )}
    </nav>
  );
};
