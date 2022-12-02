import { useState } from 'react';
import styles from './index.module.scss';
import { Main } from '../../../layouts';

enum InputTypes {
    primary = 'primary',
    success = 'success',
    error = 'error',
    disabled = 'disabled',
}
enum ButtonTypes {
    primary = 'primary',
    success = 'success',
    error = 'error',
    disabled = 'disabled',
    loading = 'loading',
}

export default function Example() {
    const [isLight, setIsLight] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [buttonStatus, setButtonStatus] = useState(ButtonTypes.primary);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Main>
            <h1>TEST</h1>
        </Main>
    );
}
