import css from './HalalCard.module.css'

const Halalcard = () => {
    return (
        <div className={`container mt-3 mb-3 ${css.halal}`}>
            <div className={css.halal1}>
                <div><img src="https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg" alt="" /></div>
                <div className={css.block}>
                    <p>Без свинины</p>
                    <span>Мы готовим из цыпленка и говядины</span>
                </div>
            </div>
        </div>
    );
}

export default Halalcard;
