import style from './index.module.scss';
import { Banner } from '../Banner';
{
    /*
enum Size {
    rect = 'rect',
    square = 'square',
}

enum Color {
    blue = 'blue',
    purple = 'purple',
    grey = 'grey',
}
*/
}

export const TopBanners = () => {
    const banners = [
        { id: 'first-b', 
            team: 'first-top', 
            github: 'test', 
            documentation: 'documentation' },
        { id: 'second-b', 
            team: 'second-top', 
            github: 'test', 
            documentation: 'documentation' },
        { id: 'third-b', 
            team: 'third-top', 
            github: 'test', 
            documentation: 'documentation' },
        { id: 'fourth-b', 
            team: 'fourth-top',
            github: 'test', 
            documentation: 'documentation' },
    ];

    return (
        <div>
            <div className={style.banners}>
                {banners.map(({ id, team, github, documentation }) => (
                    <Banner
                        key={id}
                        color="blue"
                        size="rect"
                        team={team}
                        github={github}
                        documentation={documentation}
                        onClick={() => {
                            console.log('test');
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
