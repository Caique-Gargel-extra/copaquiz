import styles from "./ModalDica.module.css"


function ModalDica({ isOpen, setOpen, res }) {
    const handleBackgroundClick = (event) => {

        if (event.target.id === "background2") {
            setOpen(false);
        }
    };
    if (isOpen) {

        window.scrollTo({ top: 0, behavior: 'smooth' })

        return (

            <div className={styles.background} id="background2" onClick={handleBackgroundClick}>
                <div className={styles.modal}>
                    <button className={styles.btn} onClick={() => setOpen(false)} >X</button>
                    <h1>DICA</h1>
                    <hr />
                    <p>Nome: {res.nome[0]} ...</p>
                    <br />
                    <p>Camisa: {res.camisa}</p>
                    <br />
                    {res.clube ? (
                        <>
                            <p> País: {res.pais}</p>
                            <br />
                            <p>Clube: {res.clube}</p>
                        </>
                    ) : (
                        <>
                            <p>Copas Jogadas: {res.gols}</p>
                            <br />
                            <p>Gols em copas: {res.copas}</p>
                        </>
                    )}


                </div>

            </div>
        )
    }
    else {
        return <></>
    }

}
export default ModalDica