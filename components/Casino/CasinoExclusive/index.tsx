import styles from './index.module.scss';

export const CasinoExclusive = () => {
    return (
        <div data-team="First" data-github="test" data-documentation="test" className={styles.wrapper}>
            <span>Ексклюзивно</span>
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
