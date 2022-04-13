import { Link } from "react-router-dom";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={css.color}>
      <div className={`container ${css.footer}`}>
        <div className={css.top}>
          <div className={css.link}>
            <span>Додо Пицца</span>
            <Link to=''>О нас</Link>
            <Link to=''>Додо-книга</Link>
            <Link to=''>Блог "Сила ума"</Link>
            <Link to=''>Додо ИС</Link>
          </div>
          <div className={css.link}>
            <span>Работа</span>
            <Link to=''>В пиццерии</Link>
          </div>
          <div className={css.link}>
            <span>Партнерам</span>
            <Link to=''>Предложить помещение</Link>
          </div>
          <div className={css.link}>
            <span>Это интересно</span>
            <Link to=''>Почему мы готовим без перчаток?</Link>
            <Link to=''>Экскурсии и мастер-классы</Link>
          </div>
          <div className={css.feedback}>
            <div className={css.between}>
              <div className={css.phone}>
                <span>звонок по </span>
                <Link to=""><img width={"20px"} src="https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/35a3090c0e41458086520f78ab9f892f.svg" alt="" /></Link>
                <Link to=""><img width={"20px"} src="https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/092d276870e24dacaeb098fb1768d585.svg" alt="" /></Link>
                <Link to=""><img width={"20px"} src="https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/d2a8e028a02042b6b72ff780d9fdbdd8.svg" alt="" /></Link>
              </div>
              <div className={css.number}>
                <p>0 (551) 550-550</p>
              </div>
              <div className={css.mail}>
                <Link to=""><p>feedback@dodopizza.kg</p></Link>
              </div>
            </div>
          </div>
        </div>
        <div className={css.bottom}>
          <div className={css.between}>
            <span className={css.right}>Принимаем к оплате</span>
            <img width="240px" src="https://dodopizza-a.akamaihd.net/site-static/dist/aec84a569e79a4696301.png" alt="" />
          </div>
        </div>
        <hr className={css.hr} />
        <div className={css.next_bottom}>
          <div className={css.first_block}>
            <span>DODO PIZZA</span>
            <span>&copy; 2022 </span>
            <Link to=''>Правовая информация</Link>
          </div>
          <div className={css.second_block}>
            <button className={css.btn}><img width={"15px"} src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" alt="facebook" /></button>
            <button className={css.btn}><img width={"15px"} src="https://cdn-icons-png.flaticon.com/512/1384/1384089.png" alt="instagram" /></button>
          </div>
        </div>
      </div>
    </div>
  )
};