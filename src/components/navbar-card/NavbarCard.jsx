import React from 'react';
import css from './NavbarCard.module.css'

const Navbarcard = ({img, title, description, price}) => {
    return (
        <div>
            <div className={css.top_block}>
                <img src={img} alt="" />
                <div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
            <div className={css.price}>
                <p>{price} сомов</p>
                <p>-1+</p>
            </div>
        </div>
    );
}

export default Navbarcard;
