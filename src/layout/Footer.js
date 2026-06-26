import styles from './Footer.module.css'
import {FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa'
import { SiPfsense } from "react-icons/si";

function Footer()
{
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><a href="https://github.com/Caique-Gargel"><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/caique-cesar-gargel-de-oliveira-615511220"><FaLinkedin/></a></li>
                <li><a href="https://x.com/CesarGargel"><FaTwitter/></a></li>
                <li><a href="https://caique-gargel.vercel.app/"><SiPfsense/></a></li>
            </ul>
        </footer>
    )
}
export default Footer