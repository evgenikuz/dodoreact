import s from './Main.module.css'
import {Slider} from "../Slider/Slider" 
import { MobileHeader } from '../MobileHeader/MobileHeader'
import { Category } from '../Category/Category'

export const Main = () => {
    return <div>
    <Slider/>  
    <MobileHeader/> 
    <Category categories={["Пицца","Комбо","Закуски","Десерты","Напитки"]}/>
</div>
}