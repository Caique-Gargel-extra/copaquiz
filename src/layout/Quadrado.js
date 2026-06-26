import { useRef, useEffect, useState } from "react";
import "./Quadrado.css";
import styles from "./Quadrado.module.css"
import defaultPlayer from "../imgPlayers/unknow.png"

function Quadrado({ text, categorie, customClass, img, flagPrimeiro }) {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        var delay;
        if (categorie == "Jogador")
            delay = 0
        if (categorie == "País" || categorie == "GolsCopa")
            delay = 1;
        if (categorie == "Função")
            delay = 2;
        if (categorie == "Clube" || categorie == "NºCopas")
            delay = 3;
        if (categorie == "Idade" || categorie == "Campeão")
            delay = 4;
        if (categorie == "Altura")
            delay = 5;
        if (categorie == "Camisa" || categorie == "PernaBoa")
            delay = 6;

        const timer = setTimeout(() => setFlipped(true), 500 * delay);
        return () => clearTimeout(timer);
    }, []);
    function carregaImg(img) {
        var m;
        try {
            m = require(`../imgPlayers/${img}.png`);
            return m;
        } catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND') {
                throw e;
            }
            return defaultPlayer;
        }
    }

    if (categorie == "Idade" && text == 0)
        text = "Não informado"
    if (!flagPrimeiro) return (

        <div className={styles.container}>
            <p className={styles.categorie}>{categorie}</p>
            <hr />
            <div className={`${styles.quadrado} ${styles[customClass]} `}>
                {img
                    ? <img
                        src={`https://images.fotmob.com/image_resources/playerimages/${img}.png`}
                        alt={img}
                        title={img}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = carregaImg(img);
                        }}
                    />
                    : <p>{text}</p>
                }


            </div>
        </div>

    )
    else return (
        <div className={styles.container}>
            <p className={styles.categorie}>{categorie}</p>
            <hr />

            <div className={`${styles.flipCardInner} ${flipped ? "flipped" : ""}`}>
                <div className={styles.flipCardFront}>

                </div>
                <div className={`${styles.flipCardBack} ${styles[customClass]} `}>
                    {img
                        ? <img
                            src={`https://images.fotmob.com/image_resources/playerimages/${img}.png`}
                            alt={img}
                            title={img}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = carregaImg(img);
                            }}
                        />
                        : (

                            <p>{text}</p>

                        )

                    }
                </div>
            </div>

        </div>
    )
}
export default Quadrado