import { Banners } from 'components/GamesPage/Banners';
import { ContainerInstant } from 'components/GamesPage/ContainerInstant';
import { Provider } from 'components/GamesPage/Provider';
import { Main } from 'layouts';

const InstantGames = () => {
    return (
        <Main>
            <Banners title="Швидкі Ігри" />
            <Provider title="Провайдери" quantity={20} />
            <ContainerInstant title="Топ" quantity={7} />
            <ContainerInstant title="Креш ігри" quantity={7} />
            <Provider title="Популярні категорії" quantity={20} isPopular />
            <ContainerInstant title="Інші ігри від SmartSoft" quantity={6} />
            <ContainerInstant title="Екшн ігри" quantity={7} />
            <Provider title="Популярні провайдери" quantity={20} isPopular />
            <ContainerInstant title="Саперні ігри" quantity={7} />
            <ContainerInstant title="Всі ігри" quantity={235} />
        </Main>
    );
};

export default InstantGames;
