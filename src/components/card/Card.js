import shashlik from "../../assets/images/shashlik.png";
import stars from "../../assets/images/stars.svg";
import "./Card.scss";

const Card = () => {
  return (
    <>
      <li className="card__item">
        <div className="card__item-img">
          <img src={shashlik} alt="shashlik-img!" />
        </div>
        <h2 className="card__item-title">
          Barbecue Shish kebab Shashlik Skewer
        </h2>
        <div className="card__item-stars">
          <img src={stars} alt="stars-img!" />
        </div>
        <p className="card__item-text">$12.00</p>
      </li>
    </>
  );
};
export default Card;
