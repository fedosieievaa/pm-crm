import styles from './index.module.scss';

type Props = {
    type?: string;
    status: string;
    value: string;
    error?: string;
    placeholder?: string | any;
    onChange: any;
    isLight?: boolean;
    list?: string;
};

export const Input = ({ type = 'text', status, placeholder, error, onChange, list, value, isLight }: Props) => {
    return (
        <div className={`${styles.inputWrapper} ${isLight
            ? styles.light
            : ''}`}>
            <input
                className={`${styles.input} ${styles[status]}`}
                type={type}
                list={list}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};
