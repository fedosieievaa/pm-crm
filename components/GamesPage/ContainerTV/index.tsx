import styles from './index.module.scss';
import { BoxTV } from '../BoxTV';

type Props = {
    title: string;
    quantity: number;
};

export const ContainerTV = ({ title, quantity }: Props) => {
    const boxes = new Array(quantity).fill('test');

    return (
        <div data-github="github" data-confluence="confluence" className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.boxes}>
                {boxes.map((_, i) => (
                    <BoxTV key={`tvgames-box-00${i}`} />
                ))}
            </div>
        </div>
    );
};
