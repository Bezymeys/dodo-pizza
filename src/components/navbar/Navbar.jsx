import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export default function Navbar({ basket }) {
  const [modal, setModal] = useState(false);

  const getAllPrice = () => {
    let price = 0;
    basket.forEach((item) => {
      price = Number(item.price) + price
    })
    return price
  }

  const onModal = () => setModal(!modal);

  return (
    <>
      <div className={`container ${css.navbar}`}>
        <Link to="/">Пицца</Link>
        <Link to="/about-us">О нас</Link>

        <button onClick={onModal}>Корзина | {basket.length}</button>


      </div>
      <div className={`${css.modal} ${modal ? css.activeModal : ""}`}>
        <div className={css.basketWrapper}>
          <img 
            onClick={onModal}
            className={css.closeModal} 
            src="https://cdn-icons-png.flaticon.com/512/458/458594.png" 
            alt="Close" 
          />
          <h2>{basket.length} товара на {getAllPrice()} сом</h2>

          <div>
            {
              basket.map((item) => <div>{item.name}</div>)
            }
          </div>
        </div>
      </div>
    </>
  )
};
