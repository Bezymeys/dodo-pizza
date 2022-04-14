import { useDispatch } from "react-redux"
import css from "./PizzaCard.module.css"

export default function PizzaCard({ title, description, price, img, id, isAdmin }) {

  const dispatch = useDispatch();
  const onBasket = () => {
    dispatch( {
      type:"SET_NEW_PIZZA",
      data:{ title, description, price, img, id}
    })
  }
  return (
    <div className={css.card} style={{ width: "18rem" }}>
      <img className="card-img-top"
        src={img || "https://dodopizza-a.akamaihd.net/static/Img/Products/3401546fe43c42e9a05325a74c937ce4_366x366.jpeg"}
        alt="Card image cap" />
      <div className={css.text}>
        <h5 className={css.title}>{title || 'Чикен Бомбони'}</h5>
        <p className={css.des}>{description || 'Соус альфредо, моцарелла, лук красный, перец, смесь сыров чеддер и пармезан, куриные кусочки, соус сладкий чили'}</p>
        <div className={css.btm_block}>
          <h5 className={css.price}>от {price || 395} сомов</h5>
          {
            isAdmin
              ? <button href="#" className={css.btn}>Изменить</button>
              : <button href="#" onClick={onBasket} className={css.btn}>Выбрать</button>
          }

        </div>
      </div>
    </div>
  )
}
