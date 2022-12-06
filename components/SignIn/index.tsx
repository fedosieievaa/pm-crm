import styles from './styles.module.scss';
import { Input } from '../Input';
import { Button } from '../Button';

export const SignIn = () => {
    return (
        <div className={styles.container}>
            <h2>Sign In</h2>
            <Input status="disabled" placeholder="Email" value={''} onChange={undefined} isLight={false} />
            <Input status="disabled" placeholder="Password" value={''} onChange={undefined} isLight={false} />
            <Button status="disabled" text="Sign In" onClick={undefined} isLight={false} />
        </div>
    );
};
