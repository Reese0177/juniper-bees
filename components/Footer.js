import {SocialIcon} from 'react-social-icons';
import styles from '../styles/Footer.module.css';

const Footer = ({height}) => {
    return (
        <footer style={{height: height}}>
            <div className={styles.footer}>
                <div className={styles.icons}>
                    
                </div>
                <div className={styles.text}>
                    &copy; Juniper Jimenez
                </div>
            </div>
        </footer>
    );
}

export default Footer;