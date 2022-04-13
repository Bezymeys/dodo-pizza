import css from './OftenOrderCard.module.css'

const Oftenordercard = () => {
    return (
        <div className={css.card}> 
            <img width={"100px"} src="https://static.depositphotos.com//storage/bgremove/processed_75e61c11-4edd-4825-932c-d37df623c458_6255cdab74345.png?isize=600" alt="" />
            <div className={css.block}>
                <span>Додо</span>
                <span>от 395 сом</span>
            </div>
        </div>
    );
}

export default Oftenordercard;
