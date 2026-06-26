import styles from './MenuModos.module.css';
import imgLineup from '../imgs/Lineup.png';
import imgSilhouete from '../imgs/Silhoute.png';
import imgPlayer from '../imgs/Player.png';
import imgBrazil from '../imgs/Brazil.png';
import imgLineupSelected from '../imgs/LineupSelected.png';
import imgSilhoueteSelected from '../imgs/SilhouteSelected.png';
import imgPlayerSelected from '../imgs/PlayerSelected.png';
import imgBrazilSelected from '../imgs/BrazilSelected.png';
import { Link } from 'react-router-dom';
function MenuModos({ modo }) {
    var img1, img2, img3, img4 = null;
    var clas1, clas2, clas3, clas4 = null;
    img1 = imgLineup;
    img2 = imgSilhouete;
    img3 = imgPlayer;
    img4 = imgBrazil;
    switch (modo) {
        case "lineup":
            img1 = imgLineupSelected;
            clas1 = "active";
            break;
        case "silhouette":
            img2 = imgSilhoueteSelected;
            clas2 = "active";
            break;
        case "player":
            img3 = imgPlayerSelected;
            clas3 = "active";
            break;
        case "brazil":
            img4 = imgBrazilSelected;
            clas4 = "active";
            break;
    }
    return (
        <div className={styles.containerMenu}>

            <div className={styles.menu}>

                <div className={styles.options}>
                    <div className={styles.ropeBackGround}></div>
                    <ul className={styles.social_list}>
                        <li><Link to="/brazil" ><img title="Quem é o craque Brasileiro" className={` ${styles[clas4]} `} src={img4}></img></Link></li>
                        <li><Link to="/lineup" ><img title="Qual é a Lineup!" className={` ${styles[clas1]} `} src={img1}></img></Link></li>
                        <li><Link to="/"><img title="Modo Classico" className={` ${styles[clas3]} `} src={img3}></img></Link></li>
                        <li><Link to="/silhouette" ><img title="Adivinhe a Silhueta!" className={` ${styles[clas2]} `} src={img2}></img></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default MenuModos;