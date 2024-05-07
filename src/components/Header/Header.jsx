import s from './Header.module.css'
import { Container } from '../Container/Container'
import logo from './icons/logo.svg'
import brandName from "./icons/dodopizza.svg"

export const Header = () => {
    return <Container>
        <header className={s.header}>
        <div className={s.header__top}>
            <div className={s.logo}>
                <div className={s.logo__icon}>
                    <img src={logo}/>
                </div>
                <div className={s.logo__name}>
                    <img src={brandName}/>
                </div>
                <p className={s.logo__brandN1}>Сеть пиццерий №1 в России</p>
            </div>
            <div className={s.hotline}>
                <p className={s.hotline__number}>8 800 302-00-60</p>
                <p className={s.hotline__hint}>Звонок бесплатный</p>
            </div>
        </div>
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
        </header>
    </Container>
}