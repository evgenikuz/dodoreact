import Button from '../../UI/Button/Button'
import { CloseButton } from '../../UI/CloseButton/CloseButton'
import { CoverBlack } from '../CoverBlack/CoverBlack'
import { ToppingCard } from '../ToppingCard/ToppingCard'
import s from './PizzaModalWindow.module.css'
import pizza from './image 8.png'
import { toppings } from '../ToppingCard/toppings'

export const PizzaModalWindow = () => {
    return <CoverBlack>
    <div className={s.pizzaModalWindow}>
        <CloseButton/>
        <div className={s.pizzaSide}>
            <div className={s.pizzaSide__background}>
                <img className={s.pizzaSide__pizzaPicture} src={pizza} alt='pizza'/>
            </div>
        </div>
        <div className={s.pizzaInfo}>
            <div className={s.pizzaInfo__scroll}>
                <h2 className={s.pizzaInfo__name}>Чиззи чеддер</h2>
                <p className={s.pizzaInfo__description}>30 см, традиционное тесто, 480 г</p>
                <div className={s.pizzaInfo__ingredients}>Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы</div>
                <div className={s.pizzaInfo__size}>Маленькая Средняя Большая</div>
                <div className={s.pizzaInfo__dough}>Традиционное Тонкое
                    <input type="radio" id="traditional" name="dough" checked/>
                    <input type="radio" id="thin" name="dough"/>
                </div>
                <div className={s.pizzaInfo__additions}>
                    <h4 className={s.additions__title}>Добавить в пиццу</h4>
                    <div className={s.additions__cards}>
                        {toppings.map((el) => <ToppingCard src={el.img} alt={el.name} toppingName={el.name} toppingPrice={el.price}/>)}
                    </div>
                </div>
            </div>
            <div className={s.pizzaInfo__buttonContainer}>
                <Button meaning='Добавить в корзину за 625 Р' width='big'/>
            </div>
        </div>
    </div>
    </CoverBlack>
}