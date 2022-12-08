import styles from './index.module.scss';

export const Provider = ({ title, quantity, isPopular }: { title: string; quantity: number; isPopular?: boolean }) => {
    const items = new Array(quantity).fill('test');
    return (
        <div data-github="github" data-confluence="confluence" className={styles.provider}>
            <div className={styles.title}>{title}</div>
            <div className={styles.boxes}>
                {items.map((_, i) => (
                    <div key={`provider-00${i}`} className={isPopular ? styles.popular : styles.box} />
                ))}
            </div>
        </div>
    );
};
