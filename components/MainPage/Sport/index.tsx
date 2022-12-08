import style from './index.module.scss';
import { Banner } from '../Banner';

export const Sport = ({ title }: any) => {
    const banners = new Array(4).fill({
        github: 'github',
        confluence: 'confluence',
    });
    return (
        <div className={style.wrapper}>
            <div className={style.title}>{title}</div>
            <div className={style.banners}>
                {banners.map(({ id, github, confluence }) => (
                    <Banner key={id} color="grey" size="rect" github={github} confluence={confluence} />
                ))}
            </div>
        </div>
    );
};
