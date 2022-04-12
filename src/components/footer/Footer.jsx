import { Link } from "react-router-dom";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={css.color}>
      <div className={`container ${css.footer}`}>
        <div className={css.top}>
          <div className={css.link}>
            <h3>Додо Пицца</h3>
            <Link to=''>О нас</Link>
            <Link to=''></Link>
            <Link to=''>Блог "Сила ума"</Link>
            <Link to=''>Додо ИС</Link>
          </div>
          <div className={css.link}>
            <h3>Работа</h3>
            <Link to=''>В пиццерии</Link>
          </div>
          <div className={css.link}>
            <h3>Партнерам</h3>
            <Link to=''>Предложить помещение</Link>
          </div>
          <div className={css.link}>
            <h3>Это интересно</h3>
            <Link to=''>Почему мы готовим без перчаток?</Link>
            <Link to=''>Экскурсии и мастер-классы</Link>
          </div>
          <div className={css.feedback}>
            <div className={css.phone}>
              <h4>звонок по </h4>
              <button><img src="https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/35a3090c0e41458086520f78ab9f892f.svg" alt="" /></button>
              <button><img src="https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/092d276870e24dacaeb098fb1768d585.svg" alt="" /></button>
              <button><img src="https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/d2a8e028a02042b6b72ff780d9fdbdd8.svg" alt="" /></button>
              <button></button>
            </div>
            <div className={css.number}>
              <button>0 (551) 550-550</button>
            </div>
            <div className={css.mail}>
              <button>feedback@dodopizza.kg</button>
            </div>
          </div>
        </div>
        <div className={css.bottom}>
          <p>Принимаем к оплате</p>
          <div className={css.image}>
            <img src="https://dodopizza-a.akamaihd.net/site-static/dist/aec84a569e79a4696301.png" alt="" />
          </div>
        </div>
        <hr />
        <div className={css.next_bottom}>
          <div className={css.first_block}>
            <h1>DODO PIZZA</h1>
            <p>&copy 2022</p>
            <h3>Правовая информация</h3>
          </div>
          <div className={css.second_block}>
          <button><img src="#" alt="#" /></button>
          <button><img src="#" alt="#" /></button>
          </div>
        </div>
      </div>
    </div>
  )
};