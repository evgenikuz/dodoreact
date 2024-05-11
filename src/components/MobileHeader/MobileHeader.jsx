import { Container } from '../Container/Container'
import s from './MobileHeader.module.css'

export const MobileHeader = () => {
    return <Container>
        <header className={s.mobileHeader}>
            <nav className={s.mobileMenu}>
                <ul className={s.mobileMenu__list}>
                    <a className={s.mobileMenu__item} href="#pizza"><li>Пицца</li></a>
                    <a className={s.mobileMenu__item} href="#combo"><li>Комбо</li></a>
                    <a className={s.mobileMenu__item} href="#appetizers"><li>Закуски</li></a>
                    <a className={s.mobileMenu__item} href="#deserts"><li>Десерты</li></a>
                    <a className={s.mobileMenu__item} href="#drinks"><li>Напитки</li></a>
                    <a className={s.mobileMenu__item} href="#other"><li>Другие товары</li></a>
                </ul>
            </nav>
        </header>
    </Container>
}