import { useRouter } from 'next/router';
import React from 'react';
import en from '../../locales/en';
import es from '../../locales/es';
import ua from '../../locales/ua';
import style from './index.module.scss';

export const Languages = () => {
    const languages = [
        {
            code: 'es',
            name: 'ES',
        },
        {
            code: 'en',
            name: 'EN',
        },
        {
            code: 'ua',
            name: 'UA',
        },
    ];
    const router = useRouter();
    const { locale } = router;
    const t: any = locale === 'en'
        ? en
        : locale === 'es'
            ? es
            : ua;
  
    const changeLanguage = (locale: string) => {
        router.push(router.pathname, router.asPath, { locale });
    };
    return (
        <div className={style.languages}>
            {languages.map(({ name, code }) => (
                <button
                    key={code}
                    className={style.language}
                    onClick={() => {
                        changeLanguage(code);
                    }}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};
