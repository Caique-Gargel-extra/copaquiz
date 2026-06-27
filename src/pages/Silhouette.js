import MenuModos from '../layout/MenuModos';
import styles from './Silhouette.module.css';
import BlocoTexto from '../layout/BlocoComponents/BlocoTexto';
import TutorialButton from '../layout/TurorialButton.modal';
import AutoCompleteInput from '../forms/AutoCompleteInput';
import SubmitButton from '../forms/SubmitButton';
import { useEffect, useState } from 'react';
import { generateidPerDate } from '../utils/helpers';
import SuccesMessage from '../layout/SuccesMessage';
import ResultSilhouette from '../layout/ResultComponents/ResultSilhoute';
import BlocoImg from '../layout/BlocoComponents/BlocoImg';
import BotaoDica from '../layout/BotaDica';
export default function Silhouette() {
    const [open,setOpen] =useState(false)
    const [acertou, setAcertou] = useState(false)
    const [players, setPlayers] = useState([])
    const [playerDoDia, setplayerDoDia] = useState([])
    const [resposta, setResposta] = useState([])
    const [ListResposta, setListResposta] = useState([])
    const [tentativas, setTentativas] = useState(13.5)
    const [fatorInicial, setFatorInicial] = useState(5)
    const [imagemData, setImagemData] = useState(null);
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

            setplayerDoDia(players[206/*generateidPerDate({ tamanho: players.length })*/]);
            //console.log(players[generateidPerDate({ tamanho: players.length })])
            if (localStorage.getItem("dateSilhoute") != hoje) {
                localStorage.removeItem("listResSilhoute")
                localStorage.removeItem("dateSilhoute");
            }
            else
                setListResposta(JSON.parse(localStorage.getItem("listResSilhoute")))
        }

    }, [players])
    useEffect(() => {
        async function carregarImagemJogador() {
            if (playerDoDia && playerDoDia.nome) {
                try {
                    const imagem = await carregaImg(playerDoDia.idFoto);
                    if (imagem) {
                        if (acertou)
                            setTentativas(1);
                        else {
                            if (ListResposta.length === 0)
                                setTentativas(calcularFatorInicial(imagem.width, imagem.height));
                            setFatorInicial(calcularFatorInicial(imagem.width, imagem.height));
                            setImagemData(imagem); // Armazena o objeto completo { src, width, height }
                        }

                    } else {
                        setImagemData(null);
                    }
                } catch (error) {
                    console.error("Erro ao carregar imagem:", error);
                    setImagemData(null);
                }
            }
        }

        carregarImagemJogador();
    }, [playerDoDia]);
    function calcularDecremento(fatorInicial) {
        // Queremos que em 9 cliques chegue a 1
        // Se fatorInicial = 10, decremento = (10 - 1) / 9 = 1
        // Se fatorInicial = 20, decremento = (20 - 1) / 9 ≈ 2.11
        return (fatorInicial - 1) / 5;
    }
    function calcularFatorInicial(larguraImagem, alturaImagem, tamanhoReferencia = 100) {
        // Usa a média das dimensões ou a maior dimensão como referência
        const tamanhoMedio = (larguraImagem + alturaImagem) / 2;

        // Quanto maior a imagem, maior o fator inicial
        // O fator mínimo é 10 (para imagem de tamanhoReferencia)
        // O fator aumenta proporcionalmente ao tamanho da imagem
        const fatorInicial = Math.max(10, Math.ceil(tamanhoMedio / tamanhoReferencia * 10));

        return fatorInicial;
    }
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
                localStorage.setItem("listResSilhoute", JSON.stringify([...ListResposta, playerAdivinhado]));
                localStorage.setItem("dateSilhoute", new Date().toLocaleString().substr(0, 10))
            }
    }
    function EnviaRes2(res) {
        var playerAdivinhado = players.find(({ id }) => id === res.id);
        if (playerAdivinhado != null)
            if ((ListResposta.find(({ id }) => id === res.id)) == null) {
                setListResposta(ListResposta => [...ListResposta, playerAdivinhado]);
                localStorage.setItem("listResSilhoute", JSON.stringify([...ListResposta, playerAdivinhado]));
                localStorage.setItem("dateSilhoute", new Date().toLocaleString().substr(0, 10))
            }
    }
    function carregaImg(img) {
        const src = `https://images.fotmob.com/image_resources/playerimages/${img}.png`;

        return new Promise((resolve, reject) => {
            const image = new window.Image();

            image.onload = () => {
                resolve({
                    src,
                    width: image.naturalWidth,
                    height: image.naturalHeight
                });
            };

            image.onerror = () => {
                resolve(null); // ou reject(new Error("Imagem não encontrada"))
            };

            image.src = src;
        });
    }
    useEffect(() => {
        var res = ListResposta.find(({ id }) => id === playerDoDia.id)
        if (res != null) {
            setTimeout(() => setAcertou(true), 500);
            inpu.disabled = true;
            setTentativas(1);
        }
        else {
            const decremento = calcularDecremento(fatorInicial);
            setTentativas(fatorInicial - (ListResposta.length * decremento));
        }




    }, [ListResposta])
    return (
        <>
            <MenuModos modo="silhouette" />
            <div className={styles.Silhouette}>
                <TutorialButton tipo="player" setOpen={setOpen} open={open} tipo="silhueta" />
                {imagemData && (
                    <BlocoImg titulo="Adivinhe o player" texto="A cada tentativa a imagem melhora" img={imagemData} tentativas={tentativas} />
                )}

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

                    {/*<Input placeholder="Digite o Nome de um Jogador..." type="text" name="name" handleOnchange={(e)=>setResposta(e.target.value)}/>*/}
                    <SubmitButton onclick={EnviaRes} />
                </form>
                <BotaoDica ListResposta={ListResposta} resposta={playerDoDia} />
                <div className={styles.downUp}>
                    {
                        ListResposta.map((item) => (
                            <ResultSilhouette res={item} diario={playerDoDia} primeiro={ListResposta[ListResposta.length - 1]} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}