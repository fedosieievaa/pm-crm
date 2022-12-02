export const TeamMembers = [
    {
        id: 1,
        teamName: 'First',
        teamList: [
            {
                id: 1,
                name: 'Yulia',
                surname: 'Shyshka',
                slackName: 'Yulia',
                period: { startDate: '2010-08-18T23:17:11.032Z',
                    endDate: '2010-08-14T23:17:11.032Z' },
                position: 'junior',
                action: { remove: 'remove',
                    move: 'move' },
            },
            {
                id: 2,
                name: 'Yulia',
                surname: 'Shyshka',
                slackName: 'Yulia',
                period: { startDate: '2010-08-18T23:17:11.032Z',
                    endDate: '2022-12-02T23:17:11.032Z' },
                position: 'junior',
                action: { remove: 'remove',
                    move: 'move' },
            },
        ],
    },
    {
        id: 2,
        teamName: 'Second',
        teamList: [
            {
                id: 1,
                name: 'Yulia',
                surname: 'Shyshka',
                slackName: 'Yulia',
                period: { startDate: '2010-08-18T23:17:11.032Z',
                    endDate: '2010-08-14T23:17:11.032Z' },
                position: 'junior',
                action: { remove: 'remove',
                    move: 'move' },
            },
            {
                id: 2,
                name: 'Yulia',
                surname: 'Shyshka',
                slackName: 'Yulia',
                period: { startDate: '2010-08-18T23:17:11.032Z',
                    endDate: '2010-08-14T23:17:11.032Z' },
                position: 'junior',
                action: { remove: 'remove',
                    move: 'move' },
            },
        ],
    },
    {
        id: 3,
        teamName: 'Third',
        teamList: [
            {
                id: 1,
                name: 'Yulia',
                surname: 'Shyshka',
                slackName: 'Yulia',
                period: { startDate: '2010-08-18T23:17:11.032Z',
                    endDate: '2010-08-14T23:17:11.032Z' },
                position: 'junior',
                action: { remove: 'remove',
                    move: 'move' },
            },
            {
                id: 2,
                name: 'Yulia',
                surname: 'Shyshka',
                slackName: 'Yulia',
                period: { startDate: '2010-08-18T23:17:11.032Z',
                    endDate: '2022-11-21T23:17:11.032Z' },
                position: 'junior',
                action: { remove: 'remove',
                    move: 'move' },
            },
        ],
    },
];

export interface TeamList {
    id: number;
    teamName: string;
    teamList: Array<IDeveloper>;
}

export interface IDeveloper {
    id: number;
    name: string;
    surname: string;
    slackName: string;
    period: { startDate: string; endDate: string };
    position: string;
    action: { remove: string; move: string };
}
