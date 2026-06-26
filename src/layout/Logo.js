import styles from './Logo.module.css';
import logo from '../imgs/logo.png';
function Logo() {
    return (
        <div className={styles.Logo}>
            <img  src={logo} className='logo' alt="cbloldle"></img>
        </div>
    );
} export default Logo;