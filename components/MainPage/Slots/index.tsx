import style from './index.module.scss';
import { Banner } from '../Banner';

export const Slots = () => {
    const banners = [
        { 
            id: 'first-s', 
            team: 'First', 
            github: 'Test 1', 
            documentation: 'documentation' 
        },
        { 
            id: 'second-s', 
            team: 'First', 
            github: 'Test 1', 
            documentation: 'documentation' 
        },
        { 
            id: 'third-s', 
            team: 'First', 
            github: 'Test 1', 
            documentation: 'documentation' 
        },
        { 
            id: 'fourth-s', 
            team: 'First', 
            github: 'Test 1', 
            documentation: 'documentation' },
        { 
            id: 'fifth-s', 
            team: 'First', 
            github: 'Test 1', 
            documentation: 'documentation' 
        },
        { 
            id: 'sixth-s', 
            team: 'First', 
            github: 'Test 1', 
            documentation: 'documentation' 
        },
        { 
            id: 'seventh-s', 
            team: 'First', 
            github: 'Test 1', 
            documentation: 'documentation' 
        },
    ];

    return (
        <div className={style.wrapper}>
            <div className={style.banners}>
                {banners.map(({ id, team, github, documentation }) => (
                    <Banner
                        key={id}
                        color="purple"
                        size="square"
                        team={team}
                        github={github}
                        documentation={documentation}
                    />
                ))}
            </div>
        </div>
    );
};
