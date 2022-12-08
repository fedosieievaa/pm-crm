import styles from './index.module.scss';

export const CasinoTop = () => {
    return (
        <div data-github="test" data-confluence="test" className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
            </div>
        </div>
    );
};
