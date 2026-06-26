import { useState, useEffect } from "react"
import styles from './Brazil.module.css';
import BlocoTexto from '../layout/BlocoComponents/BlocoTexto';
import MenuModos from '../layout/MenuModos';
import TutorialButton from '../layout/TurorialButton.modal';
import AutoCompleteInput from '../forms/AutoCompleteInput';
import ResultBrazil from '../layout/ResultComponents/ResultBrazil';
import SuccesMessage from '../layout/SuccesMessage';
import SubmitButton from '../forms/SubmitButton';
import BotaoDica from "../layout/BotaDica";
import {generateidPerDate} from '../utils/helpers';

export default function Brazil() {
    const [acertou, setAcertou] = useState(false)
    const [players, setPlayers] = useState([])
    const [playerDoDia, setplayerDoDia] = useState([])
    const [resposta, setResposta] = useState([])
    const [ListResposta, setListResposta] = useState([])
    const [open,setOpen] =useState(false)
    const inpu =document.querySelector("#teste");
    /*GET-----------------------------------------------------PLAYERS*/
    useEffect(() => {
        fetch('https://copa-quiz-json-sever.vercel.app/BrazilPlayers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {
                
                setPlayers(data)
                
            })
            .catch((err) => console.log(err))
    }, [])
    /*SET PLAYER DO DIA*/
    useEffect(() => {
        localStorage.clear()
        var hoje = new Date().toLocaleString().substr(0, 10)
        if (players.length > 0) {

            setplayerDoDia(players[generateidPerDate({ tamanho: players.length })]);

            if(localStorage.getItem("dateBrazil")!=hoje)
            {
                localStorage.removeItem("listResBrazil")
                localStorage.removeItem("dateBrazil"); 
            }
            else    
                setListResposta(JSON.parse(localStorage.getItem("listResBrazil")))
        }

    }, [players])
    useEffect(() => {
        var res = ListResposta.find(({ id }) => id === playerDoDia.id)
        if (res != null) {
            setTimeout(() => setAcertou(true), 3500);
            inpu.disabled = true;
        }
        
    }, [ListResposta])
    function EnviaRes(e) {
        e.preventDefault()
        var playerAdivinhado = players.find(({ nome }) => nome === resposta);
        if (playerAdivinhado != null)
            if ((ListResposta.find(({ nome }) => nome === resposta)) == null) {
                setListResposta(ListResposta => [...ListResposta, playerAdivinhado]);
                localStorage.setItem("listResBrazil", JSON.stringify([...ListResposta, playerAdivinhado]));
                localStorage.setItem("dateBrazil", new Date().toLocaleString().substr(0, 10))
            }
    }
    function EnviaRes2(res) {
        var playerAdivinhado = players.find(({ id }) => id === res.id);
        if (playerAdivinhado != null)
            if ((ListResposta.find(({ id }) => id === res.id)) == null) {
                setListResposta(ListResposta => [...ListResposta, playerAdivinhado]);
                localStorage.setItem("listResBrazil", JSON.stringify([...ListResposta, playerAdivinhado]));
                localStorage.setItem("dateBrazil", new Date().toLocaleString().substr(0, 10))
            }
    }
    return (
        <>
            <MenuModos modo="brazil" />

            <div className={styles.Brazil}>
                <TutorialButton tipo="player" setOpen={setOpen} open={open} tipo="brazil" />
                <BlocoTexto titulo="Modo Craque da Seleção" texto="Adivinhe o craque da seleção brasileira! chute o nome de um jogador que tenha tido passagem na seleção brasileira em copas do mundo! use as dicas para adivinhar o craque do dia" />
                <form className={styles.form}>
                   <AutoCompleteInput
                        id="teste"
                        suggestions={players
                            .filter(player => player.id >= 0)
                            .map(player => ({
                                id: player.id,
                                nome: player.nome,
                                idFoto: player.idFoto
                            }))
                        }
                        inputValue={resposta}
                        setInputValue={setResposta}
                        submit={EnviaRes2}
                    />
                    <SubmitButton onclick={EnviaRes} />
                </form>
                <BotaoDica ListResposta={ListResposta} resposta={playerDoDia} />
                <div className={styles.downUp}>
                    {
                        ListResposta.map((item) => (
                            <ResultBrazil res={item} diario={playerDoDia} primeiro={ListResposta[ListResposta.length - 1]} />
                        ))
                    }
                </div>
                <div className={styles.acertou}>
                    {acertou && (
                        <SuccesMessage message={"Parabéns você acertou o jogador do dia retorne amanhã para tentar novamente"} />
                    )}

                </div>
            </div>
        </>
    );
}