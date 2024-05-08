import s from './Grid.module.css'
import { Card } from '../Card/Card'
import {dodo} from '../../dodo'
import { Container } from '../Container/Container'

export const Grid = () => {
    return(
        
         <div className={s.grid}>
           { dodo.map(el=><Card name={el.name} description={el.description} price={el.price} src={el.img} alt={el.name}/>)};
           
         
         </div>
         
        )
}