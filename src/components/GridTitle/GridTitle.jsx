import s from './GridTitle.module.css'

export const GridTitle = ({title}) => {
    return( 
    <>
    <Container>
        <h2 className={s.gridTitle}>{title}</h2>
    </Container>
    </>
    )
}