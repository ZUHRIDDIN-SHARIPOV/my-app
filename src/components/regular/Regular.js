import regularImg from "../../assets/images/qaychi.svg";
import "./Regular.scss";
import { RegularCard } from "../card/Card";

const Regular = () => {
  return (
    <>
      <section className="regular">
        <div className="container">
          <div className="regular__block">
            <div className="regular__img">
              <img src={regularImg} alt="regular__img!" />
            </div>
            <div className="regular__top-block">
              <h2 className="regular__top-title">Our Regular Menu Pack</h2>
              <ul className="regular__top-list">
                <li className="regular__top-item">All</li>
                <li className="regular__top-item">Shawarma</li>
                <li className="regular__top-item">Turk Kebab</li>
                <li className="regular__top-item">Hamburger Kebab</li>
                <li className="regular__top-item">Doner kebab</li>
                <li className="regular__top-item">Shish kebab</li>
                <li className="regular__top-item">French fries Pizza</li>
                <li className="regular__top-item">Desserts</li>
              </ul>
            </div>
            <ul className="regular__card-list">
              <RegularCard />
              <RegularCard />
              <RegularCard />
              <RegularCard />
              <RegularCard />
              <RegularCard />
              <RegularCard />
              <RegularCard />
              <RegularCard />
              <RegularCard />
              <RegularCard />
              <RegularCard />
            </ul>
            <br />
            the website has been updated!
          </div>
        </div>
      </section>
    </>
  );
};
export default Regular;
