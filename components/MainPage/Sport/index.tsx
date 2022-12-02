import style from './index.module.scss';
import { Banner } from '../Banner';

export const Sport = ({ title }: any) => {
    const banners = [
        {
            id: 'first-b',
            team: 'First',
            github: 'Test 1',
            documentation: 'documentation',
        },
        {
            id: 'second-b',
            team: 'Second',
            github: 'Test 1',
            documentation: 'documentation',
        },
        {
            id: 'third-b',
            team: 'Third',
            github: 'Test 1',
            documentation: 'documentation',
        },
        {
            id: 'fourth-b',
            team: 'First',
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
