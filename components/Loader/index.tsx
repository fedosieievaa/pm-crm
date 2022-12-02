import styles from './index.module.scss';

type Props = {
    isLight: boolean;
    isBig?: boolean;
};

export const Loader = ({ isLight, isBig }: Props) => {
    return (
        <div className={`${styles.loader} ${isBig  
            ? styles.big 
            : ''} ${isLight
            ? styles.light
            : ''}`}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
