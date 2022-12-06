import { CasinoBonuses } from '../../../components/Casino/CasinoBonuses';
import { CasinoEvents } from '../../../components/Casino/CasinoEvents';
import { CasinoExclusive } from '../../../components/Casino/CasinoExclusive';
import { CasinoInstantGames } from '../../../components/Casino/CasinoInstantGames';
import { CasinoLive } from '../../../components/Casino/CasinoLive';
import { CasinoSlots } from '../../../components/Casino/CasinoSlots';
import { CasinoTop } from '../../../components/Casino/CasinoTop';
import { TVGames } from '../../../components/Casino/TVGames';
import { Main } from '../../../layouts';

const Casino = () => {
    return (
        <Main>
            <CasinoTop />
            <CasinoSlots />
            <CasinoBonuses />
            <CasinoLive />
            <CasinoInstantGames />
            <TVGames />
            <CasinoEvents />
            <CasinoExclusive />
        </Main>
    );
};

export default Casino;
