import s from './Grid.module.css'
import { Card } from '../Card/Card'
import {data} from '../../dodo'
import { Container } from '../Container/Container'

export const Grid = () => {
    return(
        
         <div className={s.grid}>
           { data.map(el=><Card name={el.name} description={el.description} price={el.price} src={el.img} alt={el.name}/>)};         
         
         </div>
         
        )
}