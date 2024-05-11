import s from './Grid.module.css'
import { Card } from '../Card/Card'
import {data} from '../../dodo'
import { GridTitle } from '../GridTitle/GridTitle'

export const Grid = ({category}) => {
    return(
    <>       
          <div className={s.grid}>
            { data.map(el=>(el.category==category)?(<Card name={el.name} description={el.description} price={el.price} src={el.img} alt={el.name}/>):'')}         
          </div>
    </>
        )
}