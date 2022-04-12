import css from "./PizzaCard.module.css"

export default function PizzaCard({ addToBasket, title, description, price, img, id, isAdmin, ...props }) {

  const onBasket = () => {
    addToBasket({ title, description, price, img, id, ...props })
  }
  return (
    <div className={css.card} style={{ width: "18rem" }}>
      <img className="card-img-top"
        src={img || "https://dodopizza-a.akamaihd.net/static/Img/Products/3401546fe43c42e9a05325a74c937ce4_366x366.jpeg"}
        alt="Card image cap" />
      <div className={css.text}>
        <h5 className={css.title}>{title}</h5>
        <p className={css.des}>{description}</p>
        <div className={css.btm_block}>
          <h5 className={css.price}>{price} сомов</h5>
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
