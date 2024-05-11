import s from './Category.module.css'
import {GridTitle} from '../GridTitle/GridTitle'
import {Grid} from '../Grid/Grid'

export const Category = ({category}) => 
    {
        return( 
            <>
                <GridTitle title={category}/>
                <Grid category={category}/>
            </>
        )
}
