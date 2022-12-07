import React, { useEffect, useMemo, useState } from 'react';
import { ExpiredTable, IDeveloper, TeamList, TeamMembers } from '../../mock/mockData';
import { useRouter } from 'next/router';
import TeamTable from '../../components/Table';

function MembersTeam() {
    const [expiredDate, setExpiredDate] = useState<Array<IDeveloper | ExpiredTable>>([]);
    const [currentDate, setCurrentDate] = useState<Array<IDeveloper>>([]);
    const [mockData, setMockData] = useState<Array<TeamList>>([]);
    const router = useRouter();
    const teamName = router.query.name;

    useEffect(()=>{
        setMockData(TeamMembers);
    }, []);

    const singleTeam = useMemo(
        () => mockData.filter((item: TeamList) => item.teamName === teamName)[0]?.teamList,
        [mockData, teamName],
    );

    useEffect(() => {
        if (Array.isArray(singleTeam)) {
            const expiredTeamMember = singleTeam?.filter(
                (item: IDeveloper) => new Date(item.period.endDate) < new Date(),
            );
            const currentMember = singleTeam?.filter((item: IDeveloper) => new Date(item.period.endDate) >= new Date());

            setCurrentDate(currentMember);
            setExpiredDate(expiredTeamMember);
        }
    }, [singleTeam]);
    console.log(expiredDate);

    return (
        <div>
            <h2>List of users working in {teamName}</h2>
            <TeamTable setExpiredDate={setExpiredDate} setMockData={setMockData}
                listWorkUsers mockData={mockData} 
                teamList={currentDate} teamName={teamName} />
            <h2>List of users that was working in {teamName}</h2>
            <TeamTable setExpiredDate={setExpiredDate}  setMockData={setMockData}
                mockData={mockData} 
                teamList={expiredDate.teamList ?? expiredDate} teamName={teamName} />
        </div>
    );
}

export default MembersTeam;
