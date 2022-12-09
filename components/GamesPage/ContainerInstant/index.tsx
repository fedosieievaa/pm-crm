import styles from './index.module.scss';
import { Box } from '../BoxInstant';
import { useRouter } from 'next/router';

type Props = {
    title: string;
    quantity: number;
};

export const ContainerInstant = ({ title, quantity }: Props) => {
    const boxes = new Array(quantity).fill('test');
    const router = useRouter();

    return (
        <div
            data-github="github"
            data-confluence="confluence"
            data-deeper={`${router.pathname}/game/fugaso-pariman-insta`}
            className={styles.container}
        >
            <div className={styles.title}>{title}</div>
            <div className={styles.boxes}>
                {boxes.map((_, i) => (
                    <Box key={`tvgames-box-00${i}`} />
                ))}
            </div>
        </div>
    );
};
