import s from './ToppingCard.module.css'

export const ToppingCard = ({src, alt, toppingName, toppingPrice}) => {
    return <div className={s.toppingCard}>
        <img className={s.toppingCard__picture} src={src} alt={alt}/>
        <h3 className={s.toppingCard__title}>{toppingName}</h3>
        <p className={s.toppingCard__price}>{toppingPrice} ₽</p>
    </div>
}