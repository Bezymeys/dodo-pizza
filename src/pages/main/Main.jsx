import css from "./Main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PizzaCard from "../../components/pizza-card/PizzaCard.jsx";
import Slidercard from "../../components/slider-card/SliderCard";
import Halalcard from "../../components/halal-card/HalalCard";
import Oftenordercard from "../../components/oftenorder-card/OftenOrderCard";

export default function Main({ addToBasket, pizzas }) {
  
  const nextArrow = <img src="https://cdn-user-icons.flaticon.com/68874/68874891/1649861068134.svg?token=exp=1649861969~hmac=fcef223369aa06ce549705f0f0fe10d0" alt="" />
  const prevArrow = <img src="https://cdn-user-icons.flaticon.com/68874/68874891/1649861646246.svg?token=exp=1649862547~hmac=ac74f783ba6eefa854a986399669aabe" alt="" />

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow:nextArrow,
    prevArrow:prevArrow,
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow:nextArrow,
    prevArrow:prevArrow,
  };

  return (
    <div>
      <div className={css.slider}>
        <Slider  {...settings} className="container">
          <div>
            <Slidercard />
          </div>
          <div>
            <Slidercard />
          </div>
          <div>
            <Slidercard />
          </div>
          <div>
            <Slidercard />
          </div>
          <div>
            <Slidercard />
          </div>
          <div>
            <Slidercard />
          </div>
        </Slider>
      </div>
      <div className={css.slider2}>
        <h3 className="container">Часто заказывают</h3>
        <Slider  {...settings2} className="container">
          <div>
            <Oftenordercard />
          </div>
          <div>
            <Oftenordercard />
          </div>
          <div>
            <Oftenordercard />
          </div>
          <div>
            <Oftenordercard />
          </div>
          <div>
            <Oftenordercard />
          </div>
        </Slider>
      </div>
      <Halalcard/>
      <div className="container mt-5 mb-5">
        <h1>ПИЦЦА</h1>
        <div className={"pizzaWrapper"}>
          {
            pizzas?.map((item) => <PizzaCard key={item.id} {...item} addToBasket={addToBasket} />)
          }
        </div>
      </div>
    </div>
  )
};
