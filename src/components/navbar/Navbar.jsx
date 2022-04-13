import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbarcard from "../navbar-card/NavbarCard";
import css from "./Navbar.module.css";

export default function Navbar({ basket }) {
  const [modal, setModal] = useState(false);

  const getAllPrice = () => {
    let price = 0;
    basket.forEach((item) => {
      price = item.price + price

    })
    return price
  }

  const onModal = () => setModal(!modal);

  return (
    <>

      <div className={css.color}>
        <div className={`container mt-3 mb-3 ${css.navbar}`}>
          <div className={css.link}>
            <Link to="/">Пицца</Link>
            <Link to="">Комбо</Link>
            <Link to="">Закуски</Link>
            <Link to="">Десерты</Link>
            <Link to="">Напитки</Link>
            <Link to="">Другие товары</Link>
            <Link to="">Акции</Link>
            <Link to="">Контакты</Link>
            <Link to="/about-us">О нас</Link>
          </div>

          <div className={css.btn}>
            <button onClick={onModal}>Корзина | {basket.length}</button>
          </div>
        </div>
      </div>
      <div className={`"slider single-item" ${css.modal} ${modal ? css.activeModal : ""}`}>
        <div className={css.basketWrapper}>
          <img
            onClick={onModal}
            className={css.closeModal}
            // src="https://cdn-icons-png.flaticon.com/512/458/458595.png"
            src="https://img.icons8.com/ios-filled/500/volkswagen.png"
            alt="Close"
          />
          <h2>{basket.length} товара на {getAllPrice} сом</h2>

          <div>
            {
              basket.map((item) => <Navbarcard
                description={item.description}
                img={item.img}
                title={item.title}
                price={item.price}
              />)
            }
          </div>
        </div>
      </div>
    </>
  )
};
