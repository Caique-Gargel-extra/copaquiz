import styles from "./Result.module.css"
import Quadrado from "../Quadrado";
import { useRef, useEffect } from "react"
function Result({ res, diario, primeiro }) {

    const myRef = useRef(null);

    useEffect(() => {
        if (primeiro === res && myRef.current) {
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [primeiro, res]); // Executa o scroll apenas quando `primeiro` ou `res` mudarem

    var classFuncao, classGols, classCopas, classTitulos, classAltura, classCamisa;
    var flagPrimeiro = false;

    //-----------------------------------------------------------

    if (res.funcao === diario.funcao)
        classFuncao = "certo"
    else
        classFuncao = "errado"

    //-----------------------------------------------------------

    if (res.gols === diario.gols)
        classGols = "certo"
    else {
        if (res.gols > diario.gols) {
            classGols = "lower"
        }
        else
            classGols = "upper"
    }
    //-----------------------------------------------------------

    if (res.copas === diario.copas)
        classCopas = "certo"
    else {
        if (res.copas > diario.copas) {
            classCopas = "lower"
        }
        else
            classCopas = "upper"
    }
    //-----------------------------------------------------------

    if (res.titulos === diario.titulos)
        classTitulos = "certo"
    else {
        if (res.titulos > diario.titulos) {
            classTitulos = "lower"
        }
        else
            classTitulos = "upper"
    }

    //-----------------------------------------------------------

    if (res.altura === diario.altura)
        classAltura = "certo"
    else {
        if (res.altura > diario.altura)
            classAltura = "lower"
        else
            classAltura = "upper"
    }
    //-----------------------------------------------------------
    if (res.camisa === diario.camisa) {
        classCamisa = "certo"

    }
    else {
        if (res.camisa > diario.camisa) {
            classCamisa = "lower"
        }
        else
            classCamisa = "upper"
    }
    //-----------------------------------------------------------
    if (primeiro == res)
        flagPrimeiro = true;

    function calcularIdade(dataNascimento) {
        const nascimento = new Date(dataNascimento); // Ex: "1997-03-18"
        const hoje = new Date();

        let idade = hoje.getFullYear() - nascimento.getFullYear();

        const mesAtual = hoje.getMonth();
        const diaAtual = hoje.getDate();

        const mesNascimento = nascimento.getMonth();
        const diaNascimento = nascimento.getDate();

        // Verifica se ainda não fez aniversário este ano
        if (
            mesAtual < mesNascimento ||
            (mesAtual === mesNascimento && diaAtual < diaNascimento)
        ) {
            idade--;
        }


        return idade;
    }

    return (
        <div className={styles.ContainerRes} ref={primeiro === res ? myRef : null}>
            <Quadrado text={res.nome} categorie="Jogador" img={res.id} flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.gols} categorie="GolsCopa" customClass={classGols} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.funcao} categorie="Função" customClass={classFuncao} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.copas} categorie="NºCopas" customClass={classCopas} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.titulos} categorie="Campeão" customClass={classTitulos} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={Number(res.altura) / 100 + "cm"} categorie="Altura" customClass={classAltura} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.camisa} categorie="Camisa" customClass={classCamisa} img="" flagPrimeiro={flagPrimeiro} />
        </div>
    )
}
export default Result