import styles from "./BlocoImg.module.css";
import ImagemPixelada from "../ImagemPixelada";
export default function BlocoImg({titulo, texto,img,tentativas}) {
    return (
        <>
            <div className={styles.BlocoTexto}>
                <h1>{titulo}</h1>
                <ImagemPixelada img={img.src} width={img.width} height={img.height} fatorReducao={tentativas}/>
                <p>{texto}</p>
            </div>
        </> 
    )
}