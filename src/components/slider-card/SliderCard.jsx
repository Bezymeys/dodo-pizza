import css from './SliderCard.module.css'

const Slidercard = () => {
  return (
    <div className={css.card}>
        <div className={css.img}></div>
        <p className={css.title}>{"Новая модель"}</p>
    </div>
  )
}

export default Slidercard;
