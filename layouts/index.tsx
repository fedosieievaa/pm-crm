import styles from './layout.module.scss';
import Header from './header';
import { Sidebar } from 'components/Sidebar';
import { Dropdown } from 'components/Dropdown';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { SignIn } from 'components/SignIn';
import { SignUp } from 'components/SignUp';
import { useRouter } from 'next/router';

type MainLayoutProps = {
    children: any;
};

export const Main = ({ children }: MainLayoutProps) => {
    const [data, setData] = useState<any>(null);
    const [modalType, setModalType] = useState<string | null>(null);
    const router = useRouter();

    const onClick = (e: any) => {
        const github = e.target.getAttribute('data-github');
        const top = e.clientY;
        const left = e.clientX;
        if (github) {
            const confluence = e.target.getAttribute('data-confluence');
            setData({
                github,
                confluence,
                top,
                left,
            });
        } else {
            const closest = e.target.closest('[data-github]');
            if (closest) {
                const github = closest.getAttribute('data-github');
                const confluence = closest.getAttribute('data-confluence');
                setData({
                    github,
                    confluence,
                    top,
                    left,
                });
            } else {
                setData(null);
            }
        }
    };

    const onDoubleClick = (e: any) => {
        const deeper = e.target.getAttribute('data-deeper');
        if (deeper) {
            router.push(deeper);
        } else {
            const closest = e.target.closest('[data-deeper]');
            if (closest) {
                const deeper = closest.getAttribute('data-deeper');
                router.push(deeper);
            }
        }
    };
    return (
        <>
            <div
                className={styles.main}
                onClick={(e) => {
                    setTimeout(() => {
                        onClick(e);
                    }, 300);
                }}
                onDoubleClick={onDoubleClick}
            >
                <Header setModalType={setModalType} />
                <div className={styles.wrapper}>
                    <Sidebar />
                    <div className={styles.content}>{children}</div>
                </div>
                {modalType && (
                    <Modal
                        github="github"
                        confluence="confluence"
                        close={() => {
                            setModalType(null);
                        }}
                    >
                        {modalType === 'sign-in' ? <SignIn /> : <SignUp />}
                    </Modal>
                )}
            </div>
            {data && <Dropdown github={data?.github} confluence={data?.confluence} top={data?.top} left={data?.left} />}
        </>
    );
};
