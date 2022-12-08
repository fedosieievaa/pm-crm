import style from './index.module.scss';
import { Banner } from '../Banner';

export const Slots = () => {
    const banners = new Array(6).fill({
        github: 'github',
        confluence: 'confluence',
    });
    return (
        <div className={style.wrapper}>
            <div className={style.banners}>
                {banners.map(({ id, github, confluence }) => (
                    <Banner key={id} color="purple" size="square" github={github} confluence={confluence} />
                ))}
            </div>
        </div>
    );
};
