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
    const banners = [{ id: 'first-b' }, { id: 'second-b' }, { id: 'third-b' }, { id: 'fourth-b' }];

    return (
        <div className={style.banners}>
            {banners.map(({ id }) => (
                <Banner
                    key={id}
                    color="blue"
                    size="rect"
                    onClick={() => {
                        console.log('test');
                    }}
                />
            ))}
        </div>
    );
};
