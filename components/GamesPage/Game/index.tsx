import { ContainerInstant } from '../ContainerInstant';
import styles from './index.module.scss';

export const Game = () => {
    return (
        <div data-github="github" data-confluence="confluence" className={styles.container}>
            <div className={styles.game}>
                <div className={styles.buttons}>
                    <button>Грати</button>
                    <button>Демо</button>
                </div>
            </div>
            <ContainerInstant title="Інші ігри від Fugaso" quantity={2} />
        </div>
    );
};
