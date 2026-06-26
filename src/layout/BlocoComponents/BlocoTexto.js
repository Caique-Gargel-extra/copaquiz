import styles from "./BlocoTexto.module.css";
export default function BlocoTexto({titulo, texto}) {
    return (
        <>
            <div className={styles.BlocoTexto}>
                <h1>{titulo}</h1>
                <p>{texto}</p>
            </div>
        </> 
    )
}