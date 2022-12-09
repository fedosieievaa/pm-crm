import { useState } from 'react';
import styles from './index.module.scss';
import router from 'next/router';

type Props = {
    github: string;
    confluence: string;
    top: string;
    left: string;
};

export const Dropdown = ({ github, confluence, top, left }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState<string>();

    return (
        <div className={styles.dropdown} style={{ top: `${top}px`, left: `${left}px` }}>
            <li
                className={`${styles.dropdownListItem} ${'github' === activeButton ? styles.active : ''}`}
                onClick={() => {
                    setIsOpen(false);
                    setActiveButton('github');
                    router.push(`/${github}`);
                }}
            >
                GitHub
            </li>
            <li
                className={`${styles.dropdownListItem} ${'confluence' === activeButton ? styles.active : ''}`}
                onClick={() => {
                    setIsOpen(false);
                    setActiveButton('confluence');
                    router.push(`/${confluence}`);
                }}
            >
                Confluence
            </li>
        </div>
    );
};
