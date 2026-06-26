import styles from "./BlocoImgField.module.css";
import ImgField from '../../imgs/Field4.png';
import ImgPlayer from '../../imgs/0.png';
import { useEffect, useState } from 'react';
import ModalLineup from "../ModalLineup";
import { generateidPerDate } from '../../utils/helpers';
export default function BlocoImgField({ titulo, texto, setAcertou }) {
    const [open, setOpen] = useState(false)
    const [players, setPlayers] = useState([])
    const [lineups, setLineups] = useState([])
    const [lineupDoDia, setLineupDoDia] = useState([])
    const [player1Pos, setPlayer1Pos] = useState();
    const [player2Pos, setPlayer2Pos] = useState();
    const [player3Pos, setPlayer3Pos] = useState();
    const [player4Pos, setPlayer4Pos] = useState();
    const [player5Pos, setPlayer5Pos] = useState();
    const [player6Pos, setPlayer6Pos] = useState();
    const [player7Pos, setPlayer7Pos] = useState();
    const [player8Pos, setPlayer8Pos] = useState();
    const [player9Pos, setPlayer9Pos] = useState();
    const [player10Pos, setPlayer10Pos] = useState();
    const [player11Pos, setPlayer11Pos] = useState();
    const [playerSelected, setPlayerSelected] = useState();

    const [player1Camisa, setPlayer1Camisa] = useState(0);
    const [player2Camisa, setPlayer2Camisa] = useState(0);
    const [player3Camisa, setPlayer3Camisa] = useState(0);
    const [player4Camisa, setPlayer4Camisa] = useState(0);
    const [player5Camisa, setPlayer5Camisa] = useState(0);
    const [player6Camisa, setPlayer6Camisa] = useState(0);
    const [player7Camisa, setPlayer7Camisa] = useState(0);
    const [player8Camisa, setPlayer8Camisa] = useState(0);
    const [player9Camisa, setPlayer9Camisa] = useState(0);
    const [player10Camisa, setPlayer10Camisa] = useState(0);
    const [player11Camisa, setPlayer11Camisa] = useState(0);

    const [player1class, setPlayer1class] = useState('');
    const [player2class, setPlayer2class] = useState('');
    const [player3class, setPlayer3class] = useState('');
    const [player4class, setPlayer4class] = useState('');
    const [player5class, setPlayer5class] = useState('');
    const [player6class, setPlayer6class] = useState('');
    const [player7class, setPlayer7class] = useState('');
    const [player8class, setPlayer8class] = useState('');
    const [player9class, setPlayer9class] = useState('');
    const [player10class, setPlayer10class] = useState('');
    const [player11class, setPlayer11class] = useState('');
    const [customclass, setCustomClass] = useState();




    const images = {
        1: require('../../imgs/1.png'),
        2: require('../../imgs/2.png'),
        3: require('../../imgs/3.png'),
        4: require('../../imgs/4.png'),
        5: require('../../imgs/5.png'),
        6: require('../../imgs/6.png'),
        7: require('../../imgs/7.png'),
        8: require('../../imgs/8.png'),
        9: require('../../imgs/9.png'),
        10: require('../../imgs/10.png'),
        11: require('../../imgs/11.png'),
        12: require('../../imgs/12.png'),
        13: require('../../imgs/13.png'),
        14: require('../../imgs/14.png'),
        15: require('../../imgs/15.png'),
        16: require('../../imgs/16.png'),
        17: require('../../imgs/17.png'),
        18: require('../../imgs/18.png'),
        19: require('../../imgs/19.png'),
        20: require('../../imgs/20.png'),
        21: require('../../imgs/21.png'),
        22: require('../../imgs/22.png'),
        23: require('../../imgs/23.png'),
        24: require('../../imgs/24.png'),
        25: require('../../imgs/25.png'),
        26: require('../../imgs/26.png'),

        // ...

    };
    const [images2, setImages2] = useState(images)

    useEffect(() => {
        fetch('https://copa-quiz-json-sever.vercel.app/LineupsPlayers', {
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
    useEffect(() => {
        fetch('https://copa-quiz-json-sever.vercel.app/Lineups', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {
                setLineups(data)

            })
            .catch((err) => console.log(err))
    }, [])
    useEffect(() => {

        var hoje = new Date().toLocaleString().substr(0, 10)
        if (lineups.length > 0 && players.length>0) {

            setLineupDoDia(lineups[generateidPerDate({ tamanho: lineups.length })]);
            /*if(localStorage.getItem("date")!=hoje)
            {
                localStorage.removeItem("listRes")
                localStorage.removeItem("date"); 
            }
            else    
                setListResposta(JSON.parse(localStorage.getItem("listRes")))*/
        }

    }, [lineups,players])
    useEffect(() => {
        var hoje = new Date().toLocaleString().substr(0, 10)
        console.log(lineupDoDia)
        console.log(lineupDoDia.players.length)
        console.log(players.length)

        if (lineupDoDia && lineupDoDia.players && lineupDoDia.players.length >= 10 && players && players.length >= 65) {

            setPlayer1Pos(lineupDoDia.players[0].pos)
            setPlayer2Pos(lineupDoDia.players[1].pos)
            setPlayer3Pos(lineupDoDia.players[2].pos)
            setPlayer4Pos(lineupDoDia.players[3].pos)
            setPlayer5Pos(lineupDoDia.players[4].pos)
            setPlayer6Pos(lineupDoDia.players[5].pos)
            setPlayer7Pos(lineupDoDia.players[6].pos)
            setPlayer8Pos(lineupDoDia.players[7].pos)
            setPlayer9Pos(lineupDoDia.players[8].pos)
            setPlayer10Pos(lineupDoDia.players[9].pos)
            setPlayer11Pos(lineupDoDia.players[10].pos)


            setPlayer1Camisa(players[lineupDoDia.players[0].id - 1].camisa)
            setPlayer2Camisa(players[lineupDoDia.players[1].id - 1].camisa)
            setPlayer3Camisa(players[lineupDoDia.players[2].id - 1].camisa)
            setPlayer4Camisa(players[lineupDoDia.players[3].id - 1].camisa)
            setPlayer5Camisa(players[lineupDoDia.players[4].id - 1].camisa)
            setPlayer6Camisa(players[lineupDoDia.players[5].id - 1].camisa)
            setPlayer7Camisa(players[lineupDoDia.players[6].id - 1].camisa)
            setPlayer8Camisa(players[lineupDoDia.players[7].id - 1].camisa)
            setPlayer9Camisa(players[lineupDoDia.players[8].id - 1].camisa)
            setPlayer10Camisa(players[lineupDoDia.players[9].id - 1].camisa)
            setPlayer11Camisa(players[lineupDoDia.players[10].id - 1].camisa)
        }

    }, [lineupDoDia,players])



    const abrirModal = (id, referencia) => {


        setPlayerSelected(players[lineupDoDia.players[id].id - 1])
        setCustomClass(() => referencia);
        setOpen(true);

    };
    useEffect(() => {
        if (player1class == "certo" && player2class == "certo" && player3class == "certo" && player4class == "certo"
            && player5class == "certo" && player6class == "certo" && player7class == "certo" && player8class == "certo"
            && player9class == "certo" && player10class == "certo" && player11class == "certo"
        ) {
            setAcertou(true)
        }


    }, [open])

    return (
        <>
         
                <div className={styles.BlocoTexto}>
                    <h1>{titulo}</h1>
                    <p>Use as dicas para adivinhar o elenco </p>
                    <p>titular da seleção <b>{lineupDoDia.pais} na final da copa de {lineupDoDia.ano}</b></p>
                    <div className={styles.imgContainer}>
                        <img className={styles.fieldImg} src={ImgField} alt={titulo} />
                        <div className={styles.fieldImgContainer}>

                            <>
                                <img className={` ${styles[player1Pos]} ${styles[player1class]}`} onClick={() => abrirModal(0, setPlayer1class)} src={images2[player1Camisa]} alt="Jogador" />
                                <img className={` ${styles[player2Pos]} ${styles[player2class]}`} onClick={() => abrirModal(1, setPlayer2class)} src={images2[player2Camisa]} alt="Jogador" />
                                <img className={` ${styles[player3Pos]} ${styles[player3class]}`} onClick={() => abrirModal(2, setPlayer3class)} src={images2[player3Camisa]} alt="Jogador" />
                                <img className={` ${styles[player4Pos]} ${styles[player4class]}`} onClick={() => abrirModal(3, setPlayer4class)} src={images2[player4Camisa]} alt="Jogador" />
                                <img className={` ${styles[player5Pos]} ${styles[player5class]}`} onClick={() => abrirModal(4, setPlayer5class)} src={images2[player5Camisa]} alt="Jogador" />
                                <img className={` ${styles[player6Pos]} ${styles[player6class]}`} onClick={() => abrirModal(5, setPlayer6class)} src={images2[player6Camisa]} alt="Jogador" />
                                <img className={` ${styles[player7Pos]} ${styles[player7class]}`} onClick={() => abrirModal(6, setPlayer7class)} src={images2[player7Camisa]} alt="Jogador" />
                                <img className={` ${styles[player8Pos]} ${styles[player8class]}`} onClick={() => abrirModal(7, setPlayer8class)} src={images2[player8Camisa]} alt="Jogador" />
                                <img className={` ${styles[player9Pos]} ${styles[player9class]}`} onClick={() => abrirModal(8, setPlayer9class)} src={images2[player9Camisa]} alt="Jogador" />
                                <img className={` ${styles[player10Pos]} ${styles[player10class]}`} onClick={() => abrirModal(9, setPlayer10class)} src={images2[player10Camisa]} alt="Jogador" />
                                <img className={` ${styles[player11Pos]} ${styles[player11class]}`} onClick={() => abrirModal(10, setPlayer11class)} src={images2[player11Camisa]} alt="Jogador" />
                            </>


                        </div>
                    </div>

                    <ModalLineup isOpen={open} setOpen={setOpen} players={players} playerSelected={playerSelected} setCustomclass={customclass} lineup={lineupDoDia} setImage={setImages2} />
                </div>


        </>
    )
}