import css from "./Main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PizzaCard from "../../components/pizza-card/PizzaCard.jsx";

export default function Main() {
  const pizzaArray = [
    {
      title: "1 Сыр",
      description: "Соберите свою пиццу 35 см с двумя разными вкусами",
      price: 390,
    },
    {
      title: "2 Сыра",
      description: "Соберите свою пиццу 35 см с двумя разными вкусами",
      price: 390,
      img: "https://mevishcafe.com.ng/wp-content/uploads/2021/08/Pizza.jpg"
    },
    {
      title: "3 Сыра",
      description: "Соберите свою пиццу 35 см с двумя разными вкусами",
      price: 390,
    },
    {
      title: "4 Сыра",
      description: "Соберите свою пиццу 35 см с двумя разными вкусами",
      price: 390,
      img: "https://mevishcafe.com.ng/wp-content/uploads/2021/08/Pizza.jpg"
    }
  ];


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
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      <div className="container mt-5 mb-5">
        <h1>ПИЦЦА</h1>
        <div className={css.pizzaWrapper}>
          {
            pizzaArray.map((item) => <PizzaCard {...item} />)
          }
        </div>
      </div>
    </div>
  )
};
