import styles from './index.module.scss';

export const Banners = ({ title }: any) => {
    const banners = new Array(3).fill('test');

    return (
        <div data-github="github" data-confluence="confluence" className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.banners}>
                {banners.map((_, i) => (
                    <div key={`tvgames-00${i}`} className={styles.banner} />
                ))}
            </div>
        </div>
    );
};
