<<<<<<< HEAD
import React from 'react';
import css from "./Dashboard.module.css";
import PizzaCard from "../../components/pizza-card/PizzaCard.jsx";
import { Link } from "react-router-dom"

const Dashboard = ({pizzas}) => {

    return (
        <div className='container mt-5 pizzaWrapper'>
            <Link to="/create-pizza" className={css.addPizza}>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" alt="plus" />
            </Link>
            
            {
                pizzas?.map((item) => <PizzaCard key={item.id} {...item} isAdmin />)
            }
        </div>
    );
}

export default Dashboard;
=======
import PizzaCard from "../../components/pizza-card/PizzaCard.jsx";
import css from "./Dashboard.module.css";
import { Link } from "react-router-dom";

export default function Dashboard({pizzas}) {

  return (
    <div>
      <div className="container mt-5 mb-5">
        <h1>ПИЦЦА</h1>
        <div className={"pizzaWrapper"}>
          <Link to="/create-pizza" className={css.addPizza}>
            <img src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665680.png?token=exp=1649332256~hmac=7a66ef22f31e383f0f96f318b45ecdcf" alt="Plus" />
          </Link>
          {
            pizzas?.map((item) => <PizzaCard key={item.id} {...item} isAdmin  />)
          }
        </div>
      </div>
    </div>
  )
}
>>>>>>> d7a56aded6841d73b7ba1505428fbf680485c908
