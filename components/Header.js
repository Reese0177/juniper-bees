import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Header = () => {
    const router = useRouter();
    return (
        <header>
            <div className={styles.navbar}>
            <Link href="/"><div className={styles.title}>Juniper Bee's</div></Link>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={(router.pathname === "/" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={(router.pathname === "/menu" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className={(router.pathname === "/about" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={(router.pathname === "/gallery" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/gallery">Gallery</Link>
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