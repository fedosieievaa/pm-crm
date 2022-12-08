import styles from './index.module.scss';

export const TVGames = () => {
    return (
        <div data-github="test" data-confluence="test" className={styles.wrapper}>
            <span>TV ігри</span>
            <div className={styles.container}>
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
            </div>
        </div>
    );
};
