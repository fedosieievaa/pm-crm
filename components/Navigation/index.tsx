import { Link } from 'react-router-dom';
import style from './index.module.scss';

export const Navigation = () => {
    return (
        <div className={style.nav}>
            <Link to="/">HOME</Link>
            <Link to="/example">EXAMPLE</Link>
        </div>
    );
};
