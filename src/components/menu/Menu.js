import React, { useState } from "react";
import menu from "../../assets/images/menu.svg";
import siteHeaderImg from "../../assets/images/site-header__img.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Menu.scss";

function MenuLeft() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="menu" onClick={handleShow}>
        <img src={menu} alt="menu!" />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {/* Offcanvas */}
            <div className="site-header__img menuEaTurkish">
              <img src={siteHeaderImg} alt="site-header__img!" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <ul className="offcanvas__list">
              <li className="offcanvas__item">
                <a href="https://finsweet-exam.netlify.app" className="offcanvas__item-link site-header__item-link">
                  Menu
                </a>
              </li>
              <li className="offcanvas__item">
                <a href="https://finsweet-exam.netlify.app" className="offcanvas__item-link site-header__item-link">
                  News
                </a>
              </li>
              <li className="offcanvas__item">
                <a href="https://finsweet-exam.netlify.app" className="offcanvas__item-link site-header__item-link">
                  About Us
                </a>
              </li>
              <li className="offcanvas__item">
                <a href="https://finsweet-exam.netlify.app" className="offcanvas__item-link site-header__item-link">
                  Contact Us
                </a>
              </li>
              <li className="offcanvas__item">
                <a href="https://finsweet-exam.netlify.app" className="offcanvas__item-link site-header__item-link">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default MenuLeft;
