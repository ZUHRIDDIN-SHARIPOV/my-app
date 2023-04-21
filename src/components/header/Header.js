import siteHeaderImg from "../../assets/images/site-header__img.png";
import MenuLeft from "../menu/Menu";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__block">
            <div className="site-header__img">
              <img src={siteHeaderImg} alt="site-header__img!" />
            </div>
            <ul className="site-header__list">
              <li className="site-header__item">
                <a href="https://www.youtube.com" className="site-header__item-link">
                  Menu
                </a>
              </li>

              <li className="site-header__item">
                <a href="https://www.youtube.com" className="site-header__item-link">
                  News
                </a>
              </li>

              <li className="site-header__item">
                <a href="https://www.youtube.com" className="site-header__item-link">
                  About Us
                </a>
              </li>

              <li className="site-header__item">
                <a href="https://www.youtube.com" className="site-header__item-link">
                  Contact Us
                </a>
              </li>

              <li className="site-header__item">
                <a href="https://www.youtube.com" className="site-header__item-link">
                  Log in
                </a>
              </li>
            </ul>
            <MenuLeft />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
