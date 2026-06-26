import React from 'react';
import styles from './BotaoDica.module.css';
import  {useState} from 'react';
import ModalDica from './ModalDica';

function BotaoDica({ ListResposta,resposta }) {
    const respostasFaltantes = 5 - ListResposta.length;
    const isDisabled = ListResposta.length < 5;
    const isHidden = ListResposta.length < 2;
    const [dica,setDica] =useState(false);
    return (
        <>
        <div className={styles.botaoDica }>
            <button className={`${isDisabled ? `${styles.btnDisabled}` : `${styles.btn}`}`} disabled={isDisabled} hidden={isHidden} onClick={()=>setDica(true)}>
                {isDisabled
                    ? `Dica em  ${respostasFaltantes} tentativas`
                    : 'Dica Liberada!'}
                
            </button>
            
        </div>
        <ModalDica isOpen={dica} setOpen={setDica} res={resposta}/>
        </>
    );
}

export default BotaoDica;