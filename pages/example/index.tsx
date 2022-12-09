import { useState } from 'react';
import styles from './index.module.scss';
import { Typography } from 'components/Typography/';
import { Languages } from 'components/Languages/';
import { Input } from 'components/Input/';
import { Button } from 'components/Button/';
import { Modal } from 'components/Modal/';
import { Loader } from 'components/Loader/';
import { Main } from 'layouts';

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
            <div className={`${styles.app} ${isLight ? styles.light : ''}`}>
                <ol>
                    <li className={styles.listItem}>
                        <span className={styles.list}>
                            <Typography text="example-first-li" />
                        </span>
                        <Languages />
                        <Typography text="example-text" />
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.list}>
                            <Typography text="example-second-li" />
                        </span>
                        <Button
                            status={ButtonTypes.primary}
                            onClick={() => {
                                setIsLight(!isLight);
                            }}
                            text={<Typography text={isLight ? 'dark-mode' : 'light-mode'} isLight={isLight} />}
                            isLight={isLight}
                        />
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.list}>
                            <Typography text="example-third-li" />
                        </span>

                        <Typography text="example-third-li-1" />
                        <div className={styles.form}>
                            <Input
                                status={InputTypes.primary}
                                placeholder="Type..."
                                onChange={(e: any) => {
                                    setInputValue(e.target.value);
                                }}
                                value={inputValue}
                                isLight={isLight}
                            />
                            <Button
                                status={buttonStatus}
                                onClick={() => {
                                    console.log('clicked');
                                }}
                                text={<Typography text="submit" isLight={isLight} />}
                                isLight={isLight}
                            />
                        </div>

                        <Typography text="example-third-li-2" />
                        <div className={styles.form}>
                            <Input
                                status={InputTypes.success}
                                placeholder="Type..."
                                onChange={(e: any) => {
                                    setInputValue(e.target.value);
                                }}
                                value={inputValue}
                                isLight={isLight}
                            />
                            <Button
                                status={ButtonTypes.success}
                                onClick={() => {
                                    console.log('clicked');
                                }}
                                text={<Typography text="submit" isLight={isLight} />}
                                isLight={isLight}
                            />
                        </div>

                        <Typography text="example-third-li-3" />
                        <div className={styles.form}>
                            <Input
                                status={InputTypes.error}
                                placeholder="Type..."
                                onChange={(e: any) => {
                                    setInputValue(e.target.value);
                                }}
                                value={inputValue}
                                isLight={isLight}
                            />
                            <Button
                                status={ButtonTypes.error}
                                onClick={() => {
                                    console.log('clicked');
                                }}
                                text={<Typography text="submit" isLight={isLight} />}
                                isLight={isLight}
                            />
                        </div>

                        <Typography text="example-third-li-4" />
                        <div className={styles.form}>
                            <Input
                                status={InputTypes.disabled}
                                placeholder="Type..."
                                onChange={(e: any) => {
                                    setInputValue(e.target.value);
                                }}
                                value={inputValue}
                                isLight={isLight}
                            />
                            <Button
                                status={ButtonTypes.disabled}
                                onClick={() => {
                                    console.log('clicked');
                                }}
                                text={<Typography text="submit" isLight={isLight} />}
                                isLight={isLight}
                            />
                        </div>

                        <Typography text="example-third-li-5" />
                        <div className={styles.form}>
                            <Input
                                status={InputTypes.primary}
                                placeholder="Type..."
                                onChange={(e: any) => {
                                    setInputValue(e.target.value);
                                }}
                                value={inputValue}
                                isLight={isLight}
                            />
                            <Button
                                status={ButtonTypes.loading}
                                onClick={() => {
                                    console.log('clicked');
                                }}
                                text={<Typography text="submit" isLight={isLight} />}
                                isLight={isLight}
                            />
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <Typography text="example-fourth-li" />
                        <div className={styles.loaderWrapper}>
                            <Loader isLight={isLight} isBig />
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.list}>
                            <Typography text="example-fifth-li" />
                        </span>
                        <Button
                            status={buttonStatus}
                            onClick={() => {
                                setButtonStatus(ButtonTypes.loading);
                                setTimeout(() => {
                                    setButtonStatus(ButtonTypes.success);
                                    setIsOpen(true);
                                }, 1500);
                            }}
                            text={<Typography text="open" isLight={isLight} />}
                            isLight={isLight}
                        />
                        {isOpen && (
                            <Modal
                                close={() => {
                                    setIsOpen(false);
                                    setButtonStatus(ButtonTypes.primary);
                                }}
                                isLight={isLight}
                            >
                                <div className={styles.modal}>
                                    <Typography text="example-text" />
                                </div>
                            </Modal>
                        )}
                    </li>
                    <li className={styles.listItem}>
                        <Typography text="example-sixth-li" />
                    </li>
                </ol>
            </div>
        </Main>
    );
}
