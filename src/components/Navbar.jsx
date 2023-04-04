import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// assets
import MenuIcon from "@assets/icons/MenuIcon.svg";
import CloseIcon from "@assets/icons/CloseIcon.svg";
import HomeIcon from "@mui/icons-material/Home";
import ServicesIcon from "@mui/icons-material/MiscellaneousServices";
import DatabaseIcon from "@mui/icons-material/Storage";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  function handleNavClick(title) {
    setActiveNav(title);
    handleMenuClick();
  }
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const menu = [
    {
      title: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      title: "Services",
      icon: <ServicesIcon />,
      link: "/services",
    },
    {
      title: "Projects",
      icon: <DatabaseIcon />,
      link: "/projects",
    },
    {
      title: "About",
      icon: <InfoIcon />,
      link: "/about",
    },
    {
      title: "Contact",
      icon: <MailIcon />,
      link: "/contact",
    },
  ];
  return (
    <div className="navbar">
      <header>
        <nav>
          <ul>
            <li className="navTitle navMobile">Syntax Erreur</li>
            {menu.map((val, key) => {
              return (
                <li
                  key={key}
                  className={activeNav === val.title ? "active" : ""}
                  onClick={() => handleNavClick(val.title)}
                >
                  <Link to={val.link}>{val.title}</Link>
                </li>
              );
            })}
            <li className="navMobile HamburgerMenu" onClick={handleMenuClick}>
              {isOpen ? <img src={CloseIcon} /> : <img src={MenuIcon} />}
            </li>
          </ul>
        </nav>
      </header>
      {isOpen && (
        <div className="navbar__mobile">
          <ul>
            {menu.map((val, key) => {
              return (
                <li
                  key={key}
                  className={activeNav === val.title ? "active__mobile" : ""}
                  onClick={() => handleNavClick(val.title)}
                >
                  <Link to={val.link}>
                    <div className="navbar__mobile__link">{val.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
