import { Container } from 'components/AllLivePage/Container';
import { Main } from 'layouts';

const data = [
    {
        id: 'first-b',
        title: 'Чемпіонат світу. Плей-офф',
    },
    {
        id: 'second-b',
        title: "Україна. Прем'єр-ліга",
    },
    {
        id: 'third-b',
        title: "Англія. Прем'єр-ліга",
    },
    {
        id: 'fourth-b',
        title: 'Кіберфутбол. ASDF. FIFA Absolute League (2x4 хв.)',
    },
    {
        id: 'first-b',
        title: 'Кіберфутбол. ASDF. FIFA Absolute League (2x4 хв.)',
    },
    {
        id: 'second-b',
        title: 'Кіберфутбол. ФІФА. ESportsBattle. International-3 (2x4 хв.)',
    },
    {
        id: 'third-b',

        title: 'Кіберфутбол. ФІФА. ESportsBattle. Europa League (2x4 хв.)',
    },
    {
        id: 'fourth-b',
        title: 'Кіберфутбол. ФІФА. ESportsBattle. Europa League (2x4 хв.)',
    },
    {
        id: 'first-b',
        title: 'Бахрейн. Другий дивізіон',
    },
    {
        id: 'second-b',
        title: "Ефіопія. Прем'єр-ліга",
    },
    {
        id: 'third-b',
        title: "Індія. Мізорам. Прем'єр-ліга",
    },
    {
        id: 'fourth-b',
        title: 'Нідерланди. Дивізіон U-21',
    },
    {
        id: 'fourth-b',
        title: 'Португалія. Чемпіонат U-23',
    },
    {
        id: 'fourth-b',
        title: 'Йорданія. Жінки. Кубок',
    },
    {
        id: 'fourth-b',
        title: "Індія. Мізорам. Прем'єр-ліга",
    },
    {
        id: 'fourth-b',
        title: "Індія. Мізорам. Прем'єр-ліга",
    },
];
const Football = () => {
    return (
        <Main>
            <h1>НАЙБЛИЖЧІ МАТЧІ Футбол</h1>
            {data.map(({ id, title }) => {
                return <Container key={id} title={title} team="First" github="test" confluence="confluence" />;
            })}
        </Main>
    );
};

export default Football;
