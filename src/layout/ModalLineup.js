import styles from "./ModalLineup.module.css"
import { useState, useEffect } from 'react';
import AutoCompleteInput from "../forms/AutoCompleteInput";
import exp from "../imgs/ModalLineupIcon.png";
import PlayerLineupImage from "./PlayerLineupImage";
import ResultModalLineup from "./ResultComponents/ResultModalLineup";
import defaultPlayer from "../imgPlayers/unknow.png";

function ModalLineup({ isOpen, setOpen, players, playerSelected, lineup, playerPos, setImage, setCustomclass }) {
    const [resposta, setResposta] = useState([])
    const [ListResposta, setListResposta] = useState(null)
    const [urlImage, setUrlImage] = useState(exp)
    const handleBackgroundClick = (event) => {

        if (event.target.id === "background") {
            if (ListResposta != null && ListResposta.camisa != null) {
                setImage(prev => ({
                    ...prev,
                    [playerSelected.camisa]: urlImage
                }));
            }
            setListResposta(null);
            setOpen(false);
            setUrlImage(exp);
            setResposta([]);
        }
    };
     function carregaImg(img) {
            var m;
            
            try {
                m = require(`../imgsPlayersLineups/${img}.png`);
                console.log(m)
                return m;
            } catch (e) {
                if (e.code !== 'MODULE_NOT_FOUND') {
                    throw e;
                }
                return defaultPlayer;
            }
        
        

    }
    function fecharModal() {
        if (ListResposta != null && ListResposta.camisa != null) {
            setImage(prev => ({
                ...prev,
                [playerSelected.camisa]: urlImage
            }));
        }
        setListResposta(null);
        setOpen(false);
        setUrlImage(exp);
        setResposta([]);
    }
    function EnviaRes(res) {
        var playerAdivinhado = players.find(({ id }) => id === res.id);
        if (playerAdivinhado != null)
            setListResposta(playerAdivinhado);

    }
    useEffect(() => {
        if (ListResposta && setCustomclass) {
            if(ListResposta.idFoto!=0)
                setUrlImage(`https://images.fotmob.com/image_resources/playerimages/${ListResposta.idFoto}.png`);
            else{
                setUrlImage(carregaImg(ListResposta.id))
            }
               
            if (ListResposta.nome == playerSelected.nome)
                setCustomclass("certo")
            else
                setCustomclass("errado")

        }

    }, [ListResposta])
    if (isOpen) {
        //window.scrollTo({top: 100,behavior: 'smooth'})

        return (

            <div className={styles.background} id="background" onClick={handleBackgroundClick}>
                <div className={styles.modal}>
                    <button className={styles.btn} onClick={fecharModal} >X</button>
                    <div className={styles.modalContainer}>
                        <h1>Adivinhe o camisa {playerSelected.camisa} da seleção {lineup.pais} de {lineup.ano} </h1>
                        <PlayerLineupImage img={urlImage}  />
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
                            submit={EnviaRes}
                        />
                        {ListResposta ? (
                            <>
                                <ResultModalLineup resposta={ListResposta} lineup={lineup} playerSelected={playerSelected} />
                            </>
                        ) : (
                            <></>
                        )
                        }

                    </div>

                </div>

            </div>
        )
    }
    else {
        return <></>
    }

}
export default ModalLineup