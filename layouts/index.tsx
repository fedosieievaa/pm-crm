import styles from './layout.module.scss';
import Header from './header';
import { Sidebar } from '../components/Sidebar';
import { Dropdown } from '../components/Dropdown';
import { useState } from 'react';

type MainLayoutProps = {
    children: any;
};

export const Main = ({ children }: MainLayoutProps) => {
    const [data, setData] = useState<any>();
    const [showDetails, setShowDetails] = useState<any>(false);

    return (
        <div
            className={styles.main}
            onClick={(e: any) => {
                console.log(e.target);
                const team = e.target.getAttribute('data-team');
                const github = e.target.getAttribute('data-github');
                const documentation = e.target.getAttribute('data-documentation');
                setData({ team, 
                    github, 
                    documentation });
                setShowDetails(true);
            }}
        >
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <div className={styles.content}>{children}</div>
            </div>
            {showDetails && <Dropdown team={data?.team} github={data?.github} documentation={data?.documentation} />}
        </div>
    );
};
