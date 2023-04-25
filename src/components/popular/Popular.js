import next from "../../assets/images/next.svg";
import Card from "../card/Card";
import "./Popular.scss";

const Popular = () => {
  return (
    <>
      <section className="popular">
        <div className="container">
          <div className="popular__block">
            <div className="popular__top-block">
              <h2 className="popular__top-title">Popular Dishes</h2>
              <div className="popular__top-img">
                <img src={next} alt="popular__top-img!" />
              </div>
            </div>
            <ul className="popular__list">
              <Card />
              <Card />
              <Card />
              <Card />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Popular;
