import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Nav.module.scss";
import {
  faChevronRight,
  faChevronLeft,
  faMessage,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("collapsed") === "true"
  );

  const handleToggle = () => {
    setCollapsed(!collapsed);
    localStorage.setItem("collapsed", !collapsed ? "true" : "false");
  };

  return (
    <nav className={`${style.main} ${collapsed ? style.collapsed : ""}`}>
      {collapsed ? (
        <FontAwesomeIcon
          icon={faChevronRight}
          className={style.chevron}
          onClick={() => handleToggle()}
        />
      ) : (
        <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleToggle()} />
      )}
      <ul>
        <li>
          <a href="/" target={"_blank"} title="Logs">
            <FontAwesomeIcon
              icon={faMessage}
              className={style.chevron}
              onClick={() => setCollapsed(false)}
            />
            <span> Logs </span>{" "}
          </a>
        </li>
        <li>
          <a href="/modal" target={"_blank"} title="Modal">
            <FontAwesomeIcon
              icon={faCogs}
              className={style.chevron}
              onClick={() => setCollapsed(false)}
            />
            <span>Modal</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
