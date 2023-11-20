import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import greenTea from "../Images/greenTea.jpg";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "tea");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <img src={greenTea} alt="greentea" style={{ width: "100vw" }} />
      <Section
        title="Best Selling"
        bgColor="#f6f9fc"
        productItems={bestSales}
      />

      <section className="testimonials-container">
        <h2>What Our Customers Saying</h2>
        <div className="testimonials">
          <div className="testimonial">
            <h5>"Nastea Euphoria: A Tea Revelation!"</h5>
            <p>
              {" "}
              Discovering Nastea was a game-changer for me! The exquisite taste
              and aromatic blend took my tea rituals to a whole new level. Each
              cup feels like a luxurious escape, and I can't get enough. Nastea,
              you've turned me into a lifelong fan!{" "}
              <span className="testimonal-author">Alan</span>
            </p>
          </div>
          <div className="testimonial">
            <h5>"A Symphony of Senses: Nastea's Luxe Tea Experience"</h5>
            <p>
              From the moment I open the packaging, the enticing aroma signals
              that I'm about to enjoy something truly special. The smooth,
              flavorful infusion never disappoints, making Nastea an essential
              part of my daily routine.{" "}
              <span className="testimonal-author">Ashraf P</span>
            </p>
          </div>
          <div className="testimonial">
            <h5>"Tea Bliss Unveiled: Nastea's Unforgettable Flavors"</h5>
            <p>
              {" "}
              I've tried countless brands, but Nastea stands out for its
              unparalleled quality. The meticulous selection of ingredients and
              the perfect balance of flavors make it a tea lover's dream.
              Nastea, thank you for making my tea time extraordinary!{" "}
              <span className="testimonal-author">Vivek M</span>{" "}
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
