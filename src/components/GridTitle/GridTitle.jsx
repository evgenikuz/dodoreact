import s from './GridTitle.module.css'
import {Container} from '../Container/Container'

export const GridTitle = () => {
    return( 
    <>
    <Container>
        <h2 className={s.GridTitle}>Pizza</h2>
    </Container>
    </>
    )
}