import s from './Grid.module.css'
import { Card } from '../Card/Card'
import {data} from '../../dodo'
import { GridTitle } from '../GridTitle/GridTitle'

export const Grid = () => {
    return(
    <>
          <GridTitle/>
          <div className={s.grid}>
            { data.map(el=><Card name={el.name} description={el.description} price={el.price} src={el.img} alt={el.name}/>)}         
          </div>
    </>
        )
}