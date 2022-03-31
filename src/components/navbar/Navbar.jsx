import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export default function Navbar() {
  const [modal, setModal] = useState(false);

  return (
    <div className={`container ${css.navbar}`}>
      <Link to="/">Пицца</Link>
      <Link to="/about-us">О нас</Link>

      <button onClick={() => setModal(!modal)}>Корзина</button>

      <div className={modal ? css.activeModal : css.modal}>Modal</div>
    </div>
  )
};
