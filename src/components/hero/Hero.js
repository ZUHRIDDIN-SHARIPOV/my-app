import heroImg from "../../assets/images/hero__img.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__block">
            <div className="hero__content-block">
              <h4 className="hero__content-inner-title">
                Chase the new Flavour
              </h4>
              <h1 className="hero__content-title">The key to Fine dining</h1>
              <p className="hero__content-text">
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum
                volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
                aliquam amet tellus
              </p>
              <a
                href="https://zuxriddin-sharipov.netlify.app"
                className="hero__content-link"
              >
                Explore Menu
              </a>
            </div>
            <div className="hero__img">
              <img src={heroImg} alt="hero__img!" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
