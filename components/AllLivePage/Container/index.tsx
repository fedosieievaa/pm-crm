import styles from './index.module.scss';
import { Box } from '../Box';
const banners = [
    {
        id: 'first-b',
    },
    {
        id: 'second-b',
    },
    {
        id: 'third-b',
    },
    {
        id: 'fourth-b',
    },
    {
        id: 'first-b',
    },
    {
        id: 'second-b',
    },
    {
        id: 'third-b',
    },
    {
        id: 'fourth-b',
    },
    {
        id: 'first-b',
    },
    {
        id: 'second-b',
    },
    {
        id: 'third-b',
    },
    {
        id: 'fourth-b',
    },
];
export const Container = ({ title, team, github, documentation }: any) => {
    return (
        <div className={styles.wrapper}>
            {title && <span>{title}</span>}
            <div className={styles.container} data-team={team} data-github={github} data-documentation={documentation}>
                {banners.map(({ id }) => {
                    return <Box key={id} />;
                })}
            </div>
        </div>
    );
};
