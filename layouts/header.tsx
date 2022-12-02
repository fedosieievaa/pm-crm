import styles from './layout.module.scss';
import router from 'next/router';

export default function Header() {
    return (
        <nav className={styles.header}>
            <div className={styles.logo} onClick={() => router.push('/')}>
                Parimatch
            </div>
            <ul className={styles.menu}>
                <li onClick={() => router.push('/all-live')}>Live Парі</li>
                <li onClick={() => router.push('/football')}>Найближчі матчі</li>
                <li onClick={() => router.push('/casino/lobby')}>Casino</li>
                <li onClick={() => router.push('/live-casino')}>Live Казино</li>
                <li onClick={() => router.push('/tvgames')}>TV Ігри</li>
                <li onClick={() => router.push('/instant-games')}>Швидкі Ігри</li>
            </ul>
            <div className={styles.login}>
                <div>Увійти</div>
                <div>Реєстрація</div>
            </div>
            {/* <span onClick={() => router.push('/example')}>Example</span> */}
        </nav>
    );
}
