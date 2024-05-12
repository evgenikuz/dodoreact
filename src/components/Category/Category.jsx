import s from './Category.module.css'
import {Grid} from '../Grid/Grid'
export const Category = ({categories}) => 
    {
        return( 
            <>                
                 {categories.map(el => <Grid category={el}/> )} 
            </>
        )
}
