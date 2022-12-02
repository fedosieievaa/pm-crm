import styles from './layout.module.scss';
import router from 'next/router';

export default function Header() {
    return (
        <div className={styles.header}>
            <span onClick={() => router.push('/')}>Home</span>
            {/* <span onClick={() => router.push('/example')}>Example</span> */}
        </div>
    );
}
