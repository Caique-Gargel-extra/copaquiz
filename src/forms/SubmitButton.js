import styles from "./SubmitButton.module.css"


function SubmitButton({onclick}){
    return(
        <button className={styles.btn} onClick={onclick}>Enviar</button>
    )
}
export default SubmitButton