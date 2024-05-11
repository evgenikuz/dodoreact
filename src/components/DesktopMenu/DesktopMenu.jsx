import s from './DesktopMenu.module.css'
import {Container} from '../Container/Container'

export const DesktopMenu = () => {
    return (
        <div className={s.header__bottom}>
            <nav className={s.desktopMenu}>
                <ul className={s.desktopMenu__list}>
                    <a className={s.desktopMenu__item} href="#pizza"><li>Пицца</li></a>
                    <a className={s.desktopMenu__item} href="#combo"><li>Комбо</li></a>
                    <a className={s.desktopMenu__item} href="#appetizers"><li>Закуски</li></a>
                    <a className={s.desktopMenu__item} href="#deserts"><li>Десерты</li></a>
                    <a className={s.desktopMenu__item} href="#drinks"><li>Напитки</li></a>
                    <a className={s.desktopMenu__item} href="#other"><li>Другие товары</li></a>
                </ul>
            </nav>
            <button className={s.cart}>Корзина</button>
        </div>
    )
}