import s from './GridTitle.module.css'
import {Container} from '../Container/Container'

export const GridTitle = ({title}) => {
    return( 
    <>
    <Container>
        <h2 className={s.gridTitle}>{title}</h2>
    </Container>
    </>
    )
}