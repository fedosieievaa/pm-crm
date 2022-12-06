import { CasinoLive } from '../../components/Casino/CasinoLive';
import { LiveCasinoTop } from '../../components/LiveCasinoPage/LiveCasinoTop';
import { Main } from '../../layouts';

const LiveCasino = () => {
    return (
        <Main>
            <LiveCasinoTop />
            <hr />
            <br />
            <CasinoLive title="Топ ігри" />
            <CasinoLive title="Ігрові шоу" />
            <CasinoLive title="Parimatch столи" />
            <CasinoLive title="Рулетка" />
            <CasinoLive title="Блекджек" />
            <CasinoLive title="Баккара" />
            <CasinoLive title="Інші" />
        </Main>
    );
};

export default LiveCasino;
