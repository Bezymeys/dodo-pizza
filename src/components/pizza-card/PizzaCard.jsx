


export default function PizzaCard({ addToBasket,title, description, price, img, id, isAdmin, ...props }) { 

  const onBasket = () => {
    addToBasket({title, description, price, img, id, ...props })
  }
  return (
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" 
        src={img || "https://dodopizza-a.akamaihd.net/static/Img/Products/3401546fe43c42e9a05325a74c937ce4_366x366.jpeg"} 
        alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{price} сомов</h5>
          <p className="card-text">{description}</p>
          {
            isAdmin
            ? <a href="#" className="btn btn-primary">Изменить</a>
            : <a href="#" onClick={onBasket} className="btn btn-primary">Выбрать</a>
          }
        </div>
    </div>
  )
}
