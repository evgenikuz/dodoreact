import s from './CloseButton.module.css'
// import closeButton from './close.svg'

export const CloseButton = () => {
    return <button className={s.closeButton}><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="close" d="M2 2L26 26M26 2L2 26" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button>
}