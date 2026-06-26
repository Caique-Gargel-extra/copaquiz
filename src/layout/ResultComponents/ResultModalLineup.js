import styles from "./ResultModalLineup.module.css"
import Quadrado from "../Quadrado"

export default function ResultModalLineup({ resposta, lineup, playerSelected }) {
    var classPais, classPos, classIdade, classCamisa;
    var acertou = false;

    if (resposta.pais === playerSelected.pais)
        classPais = "certo"
    else
        classPais = "errado"


    //-----------------------------------------------------------
    if (resposta.pos === playerSelected.pos)
        classPos = "certo"
    else
        classPos = "errado"


    //-----------------------------------------------------------

    if (resposta.idade2 === playerSelected.idade2) {
        classIdade = "certo"

    }
    else {
        if (resposta.idade2 > playerSelected.idade2) {
            classIdade = "lower"
        }
        else
            classIdade = "upper"
    }

    //-----------------------------------------------------------
    if (resposta.camisa === playerSelected.camisa) {
        classCamisa = "certo"

    }
    else {
        if (resposta.camisa > playerSelected.camisa) {
            classCamisa = "lower"
        }
        else
            classCamisa = "upper"
    }
    if (resposta.nome == playerSelected.nome)
        acertou = true;
    else
        acertou = false;


    return (
        <div className={styles.containerResult}>
            {
                !acertou ? (
                    <>

                        <Quadrado text={resposta.camisa} categorie="Camisa" customClass={classCamisa} />
                        <Quadrado text={resposta.pais} categorie="Pais" customClass={classPais} />
                        <Quadrado text={resposta.idade2} categorie="Idade" customClass={classIdade} />
                        <Quadrado text={resposta.pos} categorie="Posição" customClass={classPos} />


                    </>
                ) : (
                    <><h1>ACERTOU</h1></>
                )
            }
        </div >

    )
}