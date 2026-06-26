import styles from "./TurorialButton.module.css";
import TutorialModal from "./TutorialModal";
export default function TutorialButton({open,setOpen,tipo}) {
    return (
        <>
        <button onClick={()=>setOpen(true)} className={styles.btn} >
            Como jogar?
        </button>
        <TutorialModal isOpen={open} setOpen={setOpen} tipo={tipo}/>
        </>
    )
}