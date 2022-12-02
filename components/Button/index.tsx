import styles from './index.module.scss';
import { Loader } from '../Loader';

type Props = {
    status: string;
    text?: string | JSX.Element;
    onClick: any;
    isLight: boolean;
};

export const Button = ({ status, onClick, text, isLight }: Props) => {
    return (
        <div className={`${styles.buttonWrapper} ${isLight
            ? styles.light
            : ''}`}>
            <button className={`${styles.button} ${styles[status]}`} onClick={onClick}>
                {status === 'loading'
                    ? <Loader isLight={isLight} />
                    : text}
            </button>
        </div>
    );
};
