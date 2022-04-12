import css from "./PizzaCard.module.css"

export default function PizzaCard({ addToBasket, title, description, price, img, id, isAdmin, ...props }) {

<<<<<<< HEAD
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
=======

export default function PizzaCard({ addToBasket,title, name, description, img, id, isAdmin, ...props }) { 

  const onBasket = () => {
    addToBasket({title, name, description, img, id, ...props })
  }
  return (
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" 
        src={img || "https://dodopizza-a.akamaihd.net/static/Img/Products/3401546fe43c42e9a05325a74c937ce4_366x366.jpeg"} 
        alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title || name}</h5>
          <h5 className="card-title">{props.price} сомов</h5>
          <p className="card-text">{description}</p>
          {
            isAdmin 
              ? <a href="#" className="btn btn-primary">Изменить</a>
              : <a href="#" onClick={onBasket} className="btn btn-primary">Выбрать</a>
          }          
>>>>>>> d7a56aded6841d73b7ba1505428fbf680485c908
        </div>
      </div>
    </div>
  )
}
