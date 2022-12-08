import style from './index.module.scss';
import { Banner } from '../Banner';

export const TopBanners = () => {
    const banners = new Array(4).fill({
        github: 'github',
        confluence: 'confluence',
    });
    return (
        <div>
            <div className={style.banners}>
                {banners.map(({ id, github, confluence }) => (
                    <Banner key={id} color="blue" size="rect" github={github} confluence={confluence} />
                ))}
            </div>
        </div>
    );
};
