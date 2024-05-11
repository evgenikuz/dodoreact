import s from './Card.module.css'
// import image1 from './image1.jpg'
// import {image1} from 'https://media.dodostatic.net/image/r:292x292/11EE7D6110059795842D40396BCF1E73.jpg'
import Button from '../../UI/Button/Button'



export const Card = ({name,description,price,src}) => {
    return (
    <div className={s.card}>
       <img className={s.cardImage} src={src} alt={name}/>
        <h3 className={s.cardTitle}>{name}</h3>
        <p className={s.cardText}>{description}</p>
        <div className={s.wrappPrice}>
             
            <p className={s.cardPrice}>{price}</p> 
            <Button type="secondary" meaning="Собрать"/>
        </div>
    </div>)
}