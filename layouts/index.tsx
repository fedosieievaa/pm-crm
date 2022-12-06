import styles from './layout.module.scss';
import Header from './header';
import { Sidebar } from '../components/Sidebar';
import { Dropdown } from '../components/Dropdown';
import { useState } from 'react';
import { Modal } from '../components/Modal';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';

type MainLayoutProps = {
    children: any;
};

export const Main = ({ children }: MainLayoutProps) => {
    const [data, setData] = useState<any>(null);
    const [modalType, setModalType] = useState<string | null>(null);

    const getData = (e: any) => {
        const team = e.target.getAttribute('data-team');
        const top = e.clientY;
        const left = e.clientX;
        if (team) {
            const github = e.target.getAttribute('data-github');
            const documentation = e.target.getAttribute('data-documentation');
            setData({ team, 
                github, 
                documentation, 
                top, 
                left });
        } else {
            const closest = e.target.closest('[data-team]');
            if (closest) {
                const team = closest.getAttribute('data-team');
                const github = closest.getAttribute('data-github');
                const documentation = closest.getAttribute('data-documentation');
                setData({ team, 
                    github, 
                    documentation, 
                    top, 
                    left });
            } else {
                setData(null);
            }
        }
    };

    return (
        <>
            <div
                className={styles.main}
                onClick={getData}
            >
                <Header setModalType={setModalType} />
                <div className={styles.wrapper}>
                    <Sidebar />
                    <div className={styles.content}>{children}</div>
                </div>
                {modalType && (
                    <Modal
                        team="Second"
                        github="github"
                        documentation="documentation"
                        close={() => {
                            setModalType(null);
                        }}
                    >
                        {modalType === 'sign-in' 
                            ? <SignIn /> 
                            : <SignUp />}
                    </Modal>
                )}
            </div>
            {data && (
                <Dropdown
                    team={data?.team}
                    github={data?.github}
                    documentation={data?.documentation}
                    top={data?.top}
                    left={data?.left}
                />
            )}
        </>
    );
};
