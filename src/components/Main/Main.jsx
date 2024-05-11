import s from './Main.module.css'
import {Slider} from "../Slider/Slider" 
import { Category } from '../Category/Category'

export const Main = (category) => {
    return <div>
    <Slider/>   
    <Category category="Пицца"/>
    <Category category="Комбо"/>
    <Category category="Закуски"/>
    <Category category="Десерты"/> 
    <Category category="Напитки"/>
   
    


</div>
}