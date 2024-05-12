import s from './Main.module.css'
import {Slider} from "../Slider/Slider" 
import { MobileHeader } from '../MobileHeader/MobileHeader'
import { Category } from '../Category/Category'
import NewProducts from '../NewProducts/NewProducts'

export const Main = () => {
    return <div>
    <Slider/>
    <MobileHeader/> 
    <NewProducts />
    <Category categories={["Пицца","Комбо","Закуски","Десерты","Напитки"]}/>
</div>
}