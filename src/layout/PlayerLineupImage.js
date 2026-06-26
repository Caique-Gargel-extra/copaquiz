import styles from './PlayerLineupImage.module.css'
export default function PlayerLineupImage({img}){
    return(
        
            <img src={img} alt="Player" className={styles.PlayerImg} />
        
    )
}