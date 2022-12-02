import { useState } from 'react';
import styles from './index.module.scss';
import router from 'next/router';

type Props = {
    team: string;
    github: string;
    documentation: string;
    top: string;
    left: string;
};

export const Dropdown = ({ team, github, documentation, top, left }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState<string>();

    return (
        <div className={styles.dropdown} style={{ top: `${top}px`,
            left: `${left}px` }}>
            <li
                className={`${styles.dropdownListItem} ${'team' === activeButton 
                    ? styles.active 
                    : ''}`}
                onClick={() => {
                    setIsOpen(false);
                    setActiveButton('team');
                    router.push(`/team/${team}`);
                }}
            >
                Team
            </li>
            <li
                className={`${styles.dropdownListItem} ${'github' === activeButton 
                    ? styles.active 
                    : ''}`}
                onClick={() => {
                    setIsOpen(false);
                    setActiveButton('github');
                    router.push(`/repository/${github}`);
                }}
            >
                GitHub
            </li>
            <li
                className={`${styles.dropdownListItem} ${'documentation' === activeButton 
                    ? styles.active 
                    : ''}`}
                onClick={() => {
                    setIsOpen(false);
                    setActiveButton('documentation');
                    router.push(`/doc/${documentation}`);
                }}
            >
                Documentation
            </li>
        </div>
    );
};
