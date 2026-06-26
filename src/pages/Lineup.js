import MenuModos from '../layout/MenuModos';
import styles from './Lineup.module.css';
import BlocoTexto from '../layout/BlocoComponents/BlocoTexto';
import TutorialButton from '../layout/TurorialButton.modal';
import AutoCompleteInput from '../forms/AutoCompleteInput';
import SubmitButton from '../forms/SubmitButton';
import { useEffect, useState } from 'react';
import { generateidPerDate } from '../utils/helpers';
import SuccesMessage from '../layout/SuccesMessage';

import BlocoImgField from '../layout/BlocoComponents/BlocoImgField';
export default function Lineup() {
    const [acertou, setAcertou] = useState(false)
    const [open,setOpen] =useState(false)
    return (
        <>
            <MenuModos modo="lineup" />
            <div className={styles.Lineup}>
                <TutorialButton tipo="player" setOpen={setOpen} open={open} tipo="lineup" />
                <br />
                <BlocoImgField titulo="Descubra o Elenco do Dia " setAcertou={setAcertou}/>
                <div className={styles.acertou}>
                    {acertou && (
                        <SuccesMessage message={"Parabéns você acertou o elenco do dia retorne amanhã para tentar novamente"} />
                    )}

                </div>


            </div>
        </>
    );
}