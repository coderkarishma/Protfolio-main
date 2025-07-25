import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useRef, useState } from "react";
import Facebook from "../../socials/facebook.png";
import Instagram from "../../socials/instagram.png";
import LinkedIn from "../../socials/linkedin.png";
import "./Navbar.scss";

const Menu = () => {
  return (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contacts">Contacts</a>
      </li>
    </>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const mobileNav = useRef("");

  useEffect(() => {
    /**
     * Perform if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (mobileNav.current && !mobileNav.current.contains(event.target)) {
        setShowMobileNav(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNav]);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-container">
        <div className="app__navbar-container_logo">
          <p>Karishma </p>
        </div>
        <ul className="app__navbar-container_navlinks">
          <Menu />
        </ul>
        <div className="app__navbar-container_icons">
          {showMobileNav ? (
            <CloseIcon
              className="icon"
              onClick={() => setShowMobileNav(!showMobileNav)}
            />
          ) : (
            <MenuIcon
              className="icon"
              onClick={() => setShowMobileNav(!showMobileNav)}
            />
          )}
        </div>
        <ul
          ref={mobileNav}
          className={
            showMobileNav
              ? "app__navbar-container_mobilelinks show"
              : "app__navbar-container_mobilelinks"
          }
        >
          <Menu />
          <div className="app__navbar-container_mobilelinks-socials">
            <a
              href="https://www.linkedin.com/in/karishma-sain-2173a823b/"
              target="blank"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
