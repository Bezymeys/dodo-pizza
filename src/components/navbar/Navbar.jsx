import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={`container ${css.navbar}`}>
      <Link to="/">Пицца</Link>
      <Link to="/about-us">О нас</Link>
    </div>
  )
};
