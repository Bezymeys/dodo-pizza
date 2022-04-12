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
