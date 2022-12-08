import styles from './index.module.scss';
import { Box } from '../Box';

export const Container = ({ title, github, confluence }: any) => {
    const banners = new Array(12).fill('test');
    return (
        <div className={styles.wrapper}>
            {title && <span>{title}</span>}
            <div className={styles.container} data-github={github} data-confluence={confluence}>
                {banners.map((_, i) => {
                    return <Box key={`banner-00${i}`} />;
                })}
            </div>
        </div>
    );
};
