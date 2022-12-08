import styles from './index.module.scss';

export const CasinoLive = ({ title }: any) => {
    return (
        <div data-github="test" data-confluence="test" className={styles.wrapper}>
            <span>{title ? title : 'Live Казино'}</span>
            <div className={styles.container}>
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
