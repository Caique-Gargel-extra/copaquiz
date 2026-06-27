import { useState, useEffect } from "react"
import styles from './Player.module.css';
import BlocoTexto from '../layout/BlocoComponents/BlocoTexto';
import MenuModos from '../layout/MenuModos';
import TutorialButton from '../layout/TurorialButton.modal';
import AutoCompleteInput from '../forms/AutoCompleteInput';
import Result from '../layout/ResultComponents/Result';
import SuccesMessage from '../layout/SuccesMessage';
import SubmitButton from '../forms/SubmitButton';
import BotaoDica from "../layout/BotaDica";
import { generateidPerDate } from '../utils/helpers';

export default function Player() {
    const [acertou, setAcertou] = useState(false)
    const [players, setPlayers] = useState([])
    const [playerDoDia, setplayerDoDia] = useState([])
    const [resposta, setResposta] = useState([])
    const [ListResposta, setListResposta] = useState([])
    const [open,setOpen] =useState(false)
    const inpu = document.querySelector("#teste");
    /*GET-----------------------------------------------------PLAYERS*/
    useEffect(() => {
        fetch('https://copa-quiz-json-sever.vercel.app/players', {
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

        var hoje = new Date().toLocaleString().substr(0, 10)
        if (players.length > 0) {

            setplayerDoDia(players[382/*generateidPerDate({ tamanho: players.length })*/]);

            if (localStorage.getItem("date") != hoje) {
                localStorage.removeItem("listRes")
                localStorage.removeItem("date");
            }
            else
                setListResposta(JSON.parse(localStorage.getItem("listRes")))
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
                localStorage.setItem("listRes", JSON.stringify([...ListResposta, playerAdivinhado]));
                localStorage.setItem("date", new Date().toLocaleString().substr(0, 10))
            }
    }
    function EnviaRes2(res) {
        var playerAdivinhado = players.find(({ id }) => id === res.id);
        if (playerAdivinhado != null)
            if ((ListResposta.find(({ id }) => id === res.id)) == null) {
                setListResposta(ListResposta => [...ListResposta, playerAdivinhado]);
                localStorage.setItem("listRes", JSON.stringify([...ListResposta, playerAdivinhado]));
                localStorage.setItem("date", new Date().toLocaleString().substr(0, 10))
            }
    }
    return (
        <>
            <MenuModos modo="player" />

            <div className={styles.Player}>
                <TutorialButton tipo="player" setOpen={setOpen} open={open} tipo="player"  />
                <BlocoTexto titulo="Modo Player" texto="Bem vindo ao QuizCopa! Digite o nome de um jogador da copa do mundo e use as dicas para adivinhar qual é o jogador do dia!" />
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
                            <Result res={item} diario={playerDoDia} primeiro={ListResposta[ListResposta.length - 1]} />
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