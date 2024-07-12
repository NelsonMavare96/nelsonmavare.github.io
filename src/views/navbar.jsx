import React, { useEffect, useState } from "react";
import ES from "../constants/language/spanish";

const Navbar = () => {
  const [activedNavItem, setActivedNavItem] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        document.querySelector(".navbar-expand-md").classList.add("navbar-reduce");
        document.querySelector(".navbar-expand-md").classList?.remove("navbar-trans");
        //this.setState({ logo: myLogo }); //usar para cambiar cuando el fondo es oscuro o claro
      } else {
        document.querySelector(".navbar-expand-md").classList.add("navbar-trans");
        document.querySelector(".navbar-expand-md").classList?.remove("navbar-reduce");
        //this.setState({ logo: myLogo }); //usar para cambiar cuando el fondo es oscuro o claro
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
      style={{ zIndex: 900 }}
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          <p>Nelson Mavare</p>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            {Object.entries(ES.navBar).map(([id, content], index) => {
              return (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link js-scroll ${id === activedNavItem ? "active" : ""}`}
                    href={`/#${id}`}
                    onClick={() => {
                      setActivedNavItem(id);
                    }}
                  >
                    {content.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
