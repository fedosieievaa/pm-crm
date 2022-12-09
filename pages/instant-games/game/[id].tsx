import { Game } from 'components/GamesPage/Game';
import { Main } from 'layouts';
import { useRouter } from 'next/router';

function GameItem() {
    const router = useRouter();
    const game = router.query.id;

    return (
        <Main>
            <h1>{game}</h1>
            <Game />
        </Main>
    );
}

export default GameItem;
