import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false); // call when a link is clicked

  return (
    <nav>
      <div className="container nav__container">
        <a href="#" className="logo">TAJ VISUALS.</a>

        {/* Menu Links */}
        <ul className={`nav__menu ${open ? "show" : ""}`}>
          <li><a href="#" onClick={handleClose}>Home</a></li>
          <li><a href="#about" onClick={handleClose}>About</a></li>
          <li><a href="#services" onClick={handleClose}>Services</a></li>
          <li><a href="#projects" onClick={handleClose}>Projects</a></li>
        </ul>

        {/* Hamburger / Close Button */}
        <button className="menu-btn" onClick={handleToggle}>
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
