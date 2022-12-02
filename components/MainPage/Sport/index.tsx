import style from './index.module.scss';
import { Banner } from '../Banner';

export const Sport = ({ title }: any) => {
    const banners = [
        {
            id: 'first-b',
            team: 'nemo',
            github: 'Test 1',
            documentation: 'documentation',
        },
        {
            id: 'second-b',
            team: 'design',
            github: 'Test 1',
            documentation: 'documentation',
        },
        {
            id: 'third-b',
            team: 'frontend',
            github: 'Test 1',
            documentation: 'documentation',
        },
        {
            id: 'fourth-b',
            team: 'backend',
            github: 'Test 1',
            documentation: 'documentation',
        },
    ];

    return (
        <div className={style.wrapper}>
            <div className={style.title}>{title}</div>
            <div className={style.banners}>
                {banners.map(({ id, team, github, documentation }) => (
                    <Banner
                        key={id}
                        color="grey"
                        size="rect"
                        team={team}
                        github={github}
                        documentation={documentation}
                    />
                ))}
            </div>
        </div>
    );
};
