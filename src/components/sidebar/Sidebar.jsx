/* ============================================================================ */
/*                                    IMPORT                                    */  
/* ============================================================================ */

import React, { useState } from "react";
import "./sidebar.css";

import { FaBars } from "react-icons/fa";
import { GiPencilBrush }  from "react-icons/gi";
import { BiHomeHeart, BiCodeAlt } from "react-icons/bi";
import { BsFillPersonFill, BsChat } from "react-icons/bs";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <BiHomeHeart className="nav__icon" />
                  <span className="nav_iconText">Home</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <BsFillPersonFill className="nav__icon" />
                  <span>About</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#codefolio" className="nav__link">
                  <BiCodeAlt className="nav__icon" />
                  <span>Codefolio</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#artfolio" className="nav__link">
                  <GiPencilBrush className="nav__icon" />
                  <span>Artfolio</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <BsChat className="nav__icon" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; by LounaArt</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i>
          <FaBars />
        </i>
      </div>
    </>
  );
};

/* ============================================================================ */
/*                                  EXPORT                                      */
/* ============================================================================ */

export default Sidebar;