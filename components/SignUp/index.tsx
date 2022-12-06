import styles from './styles.module.scss';
import { Input } from '../Input';
import { Button } from '../Button';

export const SignUp = () => {
    return (
        <div className={styles.container}>
            <h2>Sign Up</h2>
            <Input status="disabled" placeholder="Name" value={''} onChange={undefined} isLight={false} />
            <Input status="disabled" placeholder="Surname" value={''} onChange={undefined} isLight={false} />
            <Input status="disabled" placeholder="Email" value={''} onChange={undefined} isLight={false} />
            <Input status="disabled" placeholder="Password" value={''} onChange={undefined} isLight={false} />
            <Input status="disabled" placeholder="Repeat Password" value={''} onChange={undefined} isLight={false} />
            <Button status="disabled" text="Sign Up" onClick={undefined} isLight={false} />
        </div>
    );
};
