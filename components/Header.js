import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Header = () => {
    const router = useRouter();
    return (
        <header>
            <div className={styles.navbar}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={(router.pathname === "/" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={(router.pathname === "/portfolio" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li className={(router.pathname === "/menu" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/resume">Menu</Link>
                        </li>
                        <li className={(router.pathname === "/contact" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
Header.displayName = "Header";
export default Header;