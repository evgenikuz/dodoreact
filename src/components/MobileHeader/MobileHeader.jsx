import s from './MobileHeader.module.css'

export const MobileHeader = ({categoryPizza, categoryCombo,categorySnacks,categoryDesserts,categoryDrinks}) => {
    return (
        <header className={s.mobileHeader}>
            <nav className={s.mobileMenu}>
                <ul className={s.mobileMenu__list}>
                    <a className={s.mobileMenu__item} href="#pizza"><li>{categoryPizza}</li></a>
                    <a className={s.mobileMenu__item} href="#combo"><li>{categoryCombo}</li></a>
                    <a className={s.mobileMenu__item} href="#appetizers"><li>{categorySnacks}</li></a>
                    <a className={s.mobileMenu__item} href="#deserts"><li>{categoryDesserts}</li></a>
                    <a className={s.mobileMenu__item} href="#drinks"><li>{categoryDrinks}</li></a>
                    {/* <a className={s.mobileMenu__item} href="#other"><li>Другие товары</li></a> */}
                </ul>
            </nav>
        </header>
    )
}