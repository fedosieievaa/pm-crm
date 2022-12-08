import styles from './index.module.scss';
type Props = {
    close: () => void;
    children: any;
    isLight?: boolean;
    github?: string;
    confluence?: string;
};
export const Modal = ({ close, children, isLight, github, confluence }: Props) => {
    return (
        <div
            className={`${styles.container} 
            ${isLight ? styles.light : ''}`}
        >
            <div data-github={github} data-confluence={confluence} className={styles.modal}>
                <span className={styles.close} onClick={close}>
                    x
                </span>
                {children}
            </div>
        </div>
    );
};
