import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


const Navbar = () => {
  const menuItems = [
    { title: "Home", link: "/" },
    {
      title: "Services",
      link: "/services"
    },
    { title: "About", link: "/about", subMenu: [
        { title: "Blogs", link: "/blogs" },
        // Add more submenu items as needed
      ] },
    {
      title: "Contact Us",
      link: "/contactus"
    }
    // Add more menu items as needed
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [openStates, setOpenStates] = useState(
    menuItems.map(() => false)
  );

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/"><h1 className="navbar-logo">Logo</h1></Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((menuItem, index) => (
            <li className="nav-item" key={index}>
              <Link
                to={menuItem.link}
                className={`nav-links ${menuItem.subMenu ? "drop" : ""} ${openStates[index] ? "active" : ""}`}
              >
                {menuItem.title}
                {menuItem.subMenu && (
                  <span
                    className={`dropBtn ${openStates[index] ? "rotate" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSubMenu(index);
                    } }
                  >
                    <BsArrowDownCircle />
                  </span>
                )}
              </Link>
              {menuItem.subMenu && (
                <ul className={`dropdown-menu ${openStates[index] ? "active" : ""}`}>
                  {menuItem.subMenu.map((subItem, subIndex) => (
                    <li className="dropdown-item" key={subIndex}>
                      <Link to={subItem.link} className="nav-links">
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;