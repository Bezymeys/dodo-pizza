import css from "./Main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PizzaCard from "../../components/pizza-card/PizzaCard.jsx";
import Slidercard from "../../components/slider-card/SliderCard";

export default function Main({ addToBasket, pizzas }) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div >
      <div className={css.slider}>
        <Slider  {...settings} className="container">
          <div>
            <Slidercard/>
          </div>
          <div>
            <Slidercard/>
          </div>
          <div>
            <Slidercard/>
          </div>
          <div>
            <Slidercard/>
          </div>
          <div>
            <Slidercard/>
          </div>
          <div>
            <Slidercard/>
          </div>
        </Slider>
      </div>
      <div className="container mt-5 mb-5">
        <h1>ПИЦЦА</h1>
        <div className={"pizzaWrapper"}>
          {
<<<<<<< HEAD
            
=======
>>>>>>> d7a56aded6841d73b7ba1505428fbf680485c908
            pizzas?.map((item) => <PizzaCard key={item.id} {...item} addToBasket={addToBasket} />)
          }
        </div>
      </div>
    </div>
  )
};
