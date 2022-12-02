import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Main } from '../layouts';
import { TopBanners } from '../components/MainPage/TopBanners';
import { UnderTopBanners } from '../components/MainPage/UnderTopBanners';
import { Slots } from '../components/MainPage/Slots';
import { Sport } from '../components/MainPage/Sport';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Main>
                <TopBanners />
                <UnderTopBanners />
                <Sport title="Футбол" />
                <Slots />
                <Sport title="Кіберспорт" />
                <Sport title="Баскетбол" />
                <Sport title="Хокей" />
                <Sport title="Теніс" />
                <Sport title="UFC" />
                <Sport title="Футзал" />
            </Main>
        </div>
    );
};

export default Home;
