import styles from './index.module.scss';
type Props = {
    close: () => void;
    children: any;
    isLight?: boolean;
    team?: string;
    github?: string;
    documentation?: string;
};
export const Modal = ({ close, children, isLight, team, github, documentation }: Props) => {
    return (
        <div 
            className={`${styles.container} 
            ${isLight
            ? styles.light
            : ''}`}>
            <div             
                data-team={team} 
                data-github={github} 
                data-documentation={documentation}  
                className={styles.modal}
            >
                <span className={styles.close} onClick={close}>
                    x
                </span>
                {children}
            </div>
        </div>
    );
};
