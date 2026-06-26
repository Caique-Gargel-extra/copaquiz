import styles from "./SuccesMessage.module.css";
import { useRef } from "react";
import imgA from '../imgs/imgA.png'
import imgB from '../imgs/imgB.png'
import imgC from '../imgs/imgC.png'
import imgD from '../imgs/imgD.png'
import imgF from '../imgs/imgF.png'
export default function SuccesMessage({ message }) {
    const myRef = useRef(null)
    function scrollToBottom() {
        /* window.scrollTo({top: 0,behavior: 'smooth'})*/
        const myDiv = document.getElementById('carrosel');
        const height = myDiv.getBoundingClientRect().height;

        window.scrollTo({
            top: document.body.scrollHeight * 0.47,
            behavior: "smooth",
        });
    }
    return (
        <div className={styles.succesMessage}>
            <div className={styles.bloco}>
                <h1>{message}</h1><br />
                <div className={styles.RedirectContainer} id="carrosel" onLoad={scrollToBottom} ref={myRef}>
                    <p>faça uma doação para manter o projeto vivo🥺 </p>
                    <a href="/donation"><img className={styles.imgRedirect} src={imgF} /></a>
                    <p>Aproveite para jogar os outros modos:</p>
                    <a href="/" to="Classico"><img className={styles.imgRedirect} src={imgA} /></a>
                    <a href="/silhouette"><img className={styles.imgRedirect} src={imgB} /></a>
                    <a href="/lineup"><img className={styles.imgRedirect} src={imgC} /></a>
                    <a href="/brazil"><img className={styles.imgRedirect} src={imgD} /></a>
                    
                </div>
            </div>
        </div>
    )
}