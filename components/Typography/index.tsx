import { useRouter } from 'next/router';
import styles from './index.module.scss';
import en from '../../locales/en';
import es from '../../locales/es';
import ua from '../../locales/ua';

type Props = {
    text: string;
    style?: any;
    isLight?: boolean;
};

export const Typography = ({ text, style, isLight }: Props) => {
    const router = useRouter();
    const { locale } = router;
    const t: any = locale === 'en'
        ? en
        : locale === 'es'
            ? es
            : ua;

    return (<div className={`${styles.text} ${isLight
        ? styles.light
        : ''} ${style}`}>{t[text]}</div>);
};
