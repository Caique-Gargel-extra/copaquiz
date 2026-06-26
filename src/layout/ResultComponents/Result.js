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

    var classPais, classFuncao, classClube, classIdade, classAltura, classCamisa;
    var flagPrimeiro = false;
    //-----------------------------------------------------------
    if (res.pais[0] === diario.pais[0])
        classPais = "certo"
    else
        classPais = "errado"
    /*else
    {
        classTime="errado" 
        for (var i = 0; i < diario.Org.length; i++) {
           if(res.Org[0]===diario.Org[i])
                classTime="parcial"
        }
    }*/


    //-----------------------------------------------------------

    if (res.funcao === diario.funcao)
        classFuncao = "certo"
    else
        classFuncao = "errado"
    //-----------------------------------------------------------

    if (res.clube[0] === diario.clube[0])
        classClube = "certo"
    else
        classClube = "errado"


    //-----------------------------------------------------------

    if (res.idade === diario.idade)
        classIdade = "certo"
    else {
        if (calcularIdade(res.idade) > calcularIdade(diario.idade)) {
            classIdade = "lower"
        }
        else
            classIdade = "upper"
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
    if (res.camisa === diario.camisa)
        classCamisa = "certo"
   else {
        if (res.camisa > diario.camisa)
            classCamisa = "lower"
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
            <Quadrado text={res.nome} categorie="Jogador" img={res.idFoto} flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.pais} categorie="País" customClass={classPais} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.funcao} categorie="Função" customClass={classFuncao} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.clube} categorie="Clube" customClass={classClube} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={calcularIdade(res.idade)} categorie="Idade" customClass={classIdade} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={Number(res.altura) + "cm"} categorie="Altura" customClass={classAltura} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.camisa} categorie="Camisa" customClass={classCamisa} img="" flagPrimeiro={flagPrimeiro} />
        </div>
    )
}
export default Result