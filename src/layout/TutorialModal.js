import styles from "./TutorialModal.module.css"
import a from "../imgsTutorials/player0.png"
import b from "../imgsTutorials/player5.png"
import c from "../imgsTutorials/brazil1.png"
import d from "../imgsTutorials/brazil2.png"
import e from "../imgsTutorials/silhueta1.png"
import f from "../imgsTutorials/silhueta2.png"
import g from "../imgsTutorials/silhueta3.png"

import h from "../imgsTutorials/lineup1.png"
import i from "../imgsTutorials/lineup2.png"
import j from "../imgsTutorials/lineup3.png"
import k from "../imgsTutorials/lineup6.png"
import l from "../imgsTutorials/lineup4.png"
import m from "../imgsTutorials/lineup5.png"

function TutorialModal({ isOpen, setOpen, tipo }) {
    const handleBackgroundClick = (event) => {

        if (event.target.id === "background") {
            setOpen(false);
        }
    };
    if (isOpen) {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        return (

            <div className={styles.background} id="background" onClick={handleBackgroundClick}>
                <div className={styles.modal}>
                    <button className={styles.btn} onClick={() => setOpen(false)} >X</button>
                    <h1>Olá, Bem Vindo ao QuizCopa </h1>
                    <hr />
                    <p>Olá! Seja bem-vindo ao QuizCopa, o game de adivinhação de jogadores da Copa do Mundo e da Seleção Brasileira</p> <p>Meu nome é Caique Gargel de Oliveira e sou um desenvolvedor iniciante. Este site foi criado com o propósito de divulgar meu trabalho como desenvolvedor full stack.</p>
                    <p> Para mais informações sobre meu trabalho, acesse minhas redes sociais: <a href="https:www.linkedin.com/in/caique-cesar-gargel-de-oliveira-615511220">LinkedIn</a> e <a href="https://github.com/Caique-Gargel">GitHub</a> e para ver meu portifolio <a href="https://vercel.com/caique-gargels-projects/meu-portifolio">Portifólio</a></p>
                    <p>Obs: O jogo ainda está em fase de desenvolvimento, é possível que você encontre diversos erros, por favor tenha paciência </p>


                    <h1>Como Jogar ? </h1>
                    <hr />
                    <p>Digite o nome de um jogador que está na copa do mundo para revelar suas propriedades. A cor dos quadros mudará para indicar o quão próximo você está da resposta correta:</p>
                    <p> <b className={styles.green}>Verde</b>: você acertou exatamente a propriedade.</p>

                    <p> <b className={styles.red}>Vermelho:</b> não há relação entre seu palpite e a propriedade correta.</p>
                    <p> <b className={styles.red}>↑ ↓</b> Setas também indicarão se a resposta correta está acima ou abaixo do seu palpite.</p>
                    <p> <b> Use as cores como dica para descobrir o jogador do dia!</b></p>
                    {tipo == "player" && (
                        <>
                            <h1>Propriedades </h1>
                            <hr />
                            <p><b className={styles.topico}>Pais:</b> O pais da seleção que o jogador representa</p>
                            <p><b className={styles.subtopico}>Possíveis Valores:</b> Brasil, Alemanha, França, etc…</p>
                            <br />
                            <p><b className={styles.topico}>Função:</b> Função exercicida pelo jogador, baseado na posição dentro de campo</p>
                            <p><b className={styles.subtopico}>Possíveis valores:</b> goleiro, defensor, meiocampista e atacante</p>
                            <br />
                            <p><b className={styles.topico}>Clube:</b> Representa o Clube Atual do Jogador</p>
                            <p><b className={styles.subtopico}>Possíveis Valores:</b> Liverpool, Real Madrid, Paris Saint-Germain, etc…</p>

                            <br />
                            <p><b className={styles.topico}>Idade:</b> Idade atual do jogador, as setas ↑↓ indicam se a idade do jogador do dia é maior ↑ ou menor ↓ que a do jogador selecioanado</p>
                            <br />
                            <p><b className={styles.topico}>Altura:</b> Altura do jogador em centimetros, as setas ↑↓ indicam se a Altura do jogador do dia é maior ↑ ou menor ↓ que a do jogador selecionado</p>
                            <br />
                            <p><b className={styles.topico}>Camisa:</b> Numero da Camisa usada pelo jogador na seleção, as setas ↑↓ indicam se o Numero da Camisa do jogador do dia é maior ↑ ou menor ↓ que a do jogador selecionado</p>

                            <h1>Exemplo: </h1>
                            <hr />
                            <p>Considere que o jogador do dia é o <b className={styles.topico}>Neymar.</b></p>
                            <p>Se a sua resposta for o <b className={styles.subtopico}>Endrick</b>, essas propriedades aparecerão:</p>
                            <img src={a} alt={"ex2"} />
                            <br />
                            <p>Pais e Função: <b className={styles.green}>Verde</b></p>
                            <p>Correto pois ambos os jogadores estão atuando no pela seleção brasileira e ambos são atacantes</p>
                            <br />

                            <p>Clube: <b className={styles.red}>Vermelho</b></p>
                            <p>Incorreto o clube atual do Neymar é o santos enquanto o Endrick atua pelo Lyon</p>
                            <br />

                            <p>Idade e Altura: <b className={styles.red}>Vermelho</b> com uma seta para cima</p>
                            <p>A seta para cima nas duas propriedades indica que o jogador do dia Neymar é mais alto e mais velho que o jogador selecionado Endrick </p>
                            <br />

                            <p>Camisa: <b className={styles.red}>Vermelho</b> com uma seta para baixo</p>
                            <p>A seta para baixo indica que a camisa do jogador do dia Neymar tem o numero menor que a camisa do jogador selecionado Endrick (10 &#60; 19)</p>
                            <br />


                            <p>Ao Responder Neymar essas propriedades aparecerão:</p>
                            <img src={b} alt={"ex2"} />
                        </>
                    )
                    }
                    {tipo == "brazil" && (
                        <>
                            <h1>Propriedades </h1>
                            <hr />
                            <p><b className={styles.topico}>GolsCopa:</b> O numero de gols feitos pelo jogador em copas do mundo</p>
                            <br />
                            <p><b className={styles.topico}>Função:</b> Função exercicida pelo jogador, baseado na posição dentro de campo</p>
                            <p><b className={styles.subtopico}>Possíveis valores:</b> goleiro, defensor, meiocampista e atacante</p>
                            <br />
                            <p><b className={styles.topico}>NºCopas:</b> Representa o numero de vezes que esse jogador foi convocado para copas do mundo</p>
                            <br />
                            <p><b className={styles.topico}>Campeão:</b> Numero de vezes que esse jogador foi campeão da copa do mundo</p>
                            <br />
                            <p><b className={styles.topico}>Altura:</b> Altura do jogador em centimetros, as setas ↑↓ indicam se a Altura do jogador do dia é maior ↑ ou menor ↓ que a do jogador selecionado</p>
                            <br />
                            <p><b className={styles.topico}>Camisa:</b> Numero da Camisa usada pelo jogador na seleção, as setas ↑↓ indicam se o Numero da Camisa do jogador do dia é maior ↑ ou menor ↓ que a do jogador selecionado</p>

                            <h1>Exemplo: </h1>
                            <hr />
                            <p>Considere que o jogador do dia é o <b className={styles.topico}>Pelé.</b></p>
                            <p>Se a sua resposta for o <b className={styles.subtopico}>Neymar</b>, essas propriedades aparecerão:</p>
                            <img src={c} alt={"ex2"} />
                            <br />
                            <p>Função e Camisa: <b className={styles.green}>Verde</b></p>
                            <p>Correto pois ambos os jogadores são atacantes e ambos jogaram com a 10</p>
                            <br />

                            <p>GolsCopa, NCopas e Campeão: <b className={styles.red}>Vermelho</b> com uma seta para cima</p>
                            <p>A seta para cima nas 3 propriedades indica que o jogador do dia (Pelé) fez mais gols, participou de mais copas e ganhou mais copas do que o jogador selecionado </p>
                            <br />

                            <p>Altura: <b className={styles.red}>Vermelho</b> com uma seta para baixo</p>
                            <p>A seta para baixo indica que a altura do jogador do dia (PELÉ) é mais baixa que o jogador selecionado (1.73m &#60; 1.75m)</p>
                            <br />


                            <p>Ao Responder Pelé essas propriedades aparecerão:</p>
                            <img src={d} alt={"ex2"} />
                        </>
                    )

                    }
                    {tipo == "silhueta" && (
                        <>
                            <h1>Modo Silhoueta </h1>
                            <hr />
                            
                            <p>No modo silhueta e mostrado uma imagem pixelada de um jogador da copa de 2026</p>
                            <p>A cada tentativa a qualidade da imagem melhora, ate que você acerte o jogador do dia</p>
                            <br />
                            <h1>Exemplo </h1>
                            <hr />
                            <p>Considere que o jogador do dia é o <b className={styles.topico}>Vini JR.</b></p>
                            <p>Essa será a primeira imagem</p>
                            <img src={e} alt={"ex2"} />
                            <p> apos 3 tentativas essa será a imagem exibida</p>
                            <img src={f} alt={"ex2"} />
                            <p>suas tentativas sao mostradas em vermelho caso erre </p>
                            <img src={g} alt={"ex2"} />
                        </>
                    )

                    }
                    {tipo == "lineup" && (
                        <>
                             <h1>Modo Elenco do Dia </h1>
                            <hr />
                            
                            <p>No modo Elenco do dia e você deve descobri os 11 jogadores de uma seleção finalista da copa do mundo</p>
                            <p>O pais, O ano, As posições e camisas dos Jogadores são mostrados na tela inicial</p>
                            <p>Clique nas camisas para adivinhar o jogador respectivo</p>
                            <br />
                            <h1>Exemplo </h1>
                            <hr />
                            <p>Considere que o Elenco do dia é a <b className={styles.topico}>Alemanha Campeã de 2022</b></p>
                            <p>Essa será a primeira imagem mostrada com as camisas e posições dos jogadores</p>
                            <img src={h} alt={"ex2"} />
                            <p> Ao clicar na camisa 10 essa janela vai aparecer</p>
                            <img src={i} alt={"ex2"} />
                            <p>o camisa 10 dessa seleção é messi, mas se você selecionar uma opção errada, tem dicas para te ajudar a acertar </p>
                            <img src={j} alt={"ex2"} />
                            <p>se voce fechar a janela depois de escolher um jogador errado, sua escolha ficara circulada em vermelho</p>
                            <img src={k} alt={"ex2"} />
                            <p>você pode selecionar o camisa 10 denovo, e tentar uma nova reposta, agora vamos colocar messi</p>
                            <img src={l} alt={"ex2"} />
                            <p>ao fechar a janela o jogador correto ficara circulado em verde</p>
                            <img src={m} alt={"ex2"} />
                            <p>Acerte todos os jogadores para concluir o desafio</p>
                        </>
                    )

                    }





                </div>

            </div>
        )
    }
    else {
        return <></>
    }

}
export default TutorialModal