import { Banners } from 'components/GamesPage/Banners';
import { ContainerTV } from 'components/GamesPage/ContainerTV';
import { Main } from 'layouts';

const TVGames = () => {
    return (
        <Main>
            <Banners title="TV Ігри" />
            <ContainerTV title="\o\ betgames" quantity={6} />
            <ContainerTV title="tvbet" quantity={6} />
            <ContainerTV title="fazi" quantity={3} />
            <ContainerTV title="Всі ігри" quantity={15} />
        </Main>
    );
};

export default TVGames;
