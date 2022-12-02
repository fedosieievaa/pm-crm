import style from './index.module.scss';
import { Banner } from '../Banner';

export const Slots = () => {
    const banners = [
        { id: 'first-s' },
        { id: 'second-s' },
        { id: 'third-s' },
        { id: 'fourth-s' },
        { id: 'fifth-s' },
        { id: 'sixth-s' },
        { id: 'seventh-s' },
    ];

    return (
        <div className={style.wrapper}>
            <div className={style.banners}>
                {banners.map(({ id }) => (
                    <Banner
                        key={id}
                        color="purple"
                        size="square"
                        onClick={() => {
                            console.log('test');
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
