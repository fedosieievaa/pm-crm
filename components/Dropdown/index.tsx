import { useState } from 'react';
import styles from './index.module.scss';

type Props = {
    items: any[];
    isLight: boolean;
    name?: string;
};

export const Dropdown = ({ name = 'Dropdown', items, isLight }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState(items[0].name);

    return (
        <div className={`${styles.dropdown} ${isLight
            ? styles.light
            : ''}`}>
            <button
                className={styles.dropdownButton}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {name}
            </button>
            {isOpen && (
                <ul className={styles.dropdownList}>
                    {items.map((item: any) => {
                        return (
                            <li
                                className={`${styles.dropdownListItem} ${
                                    item.name === activeButton
                                        ? styles.active
                                        : ''
                                }`}
                                key={item.id}
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveButton(item.name);
                                }}
                            >
                                {item.name}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
