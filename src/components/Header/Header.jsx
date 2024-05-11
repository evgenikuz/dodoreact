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
                <div className={s.logo__right}>
                    <div className={s.logo__name}>
                        <img src={brandName}/>
                    </div>
                    <p className={s.logo__brandN1}>Сеть пиццерий №1 в России</p>
                </div>
            </div>
            <div className={s.hotline}>
                <p className={s.hotline__number}>8 800 302-00-60</p>
                <p className={s.hotline__hint}>Звонок бесплатный</p>
            </div>
        </div>
        </header>
    </Container>
}