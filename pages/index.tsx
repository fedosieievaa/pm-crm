import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Main } from '../layouts';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Main>
                <h1>HOME PAGE</h1>
            </Main>
        </div>
    );
};

export default Home;
