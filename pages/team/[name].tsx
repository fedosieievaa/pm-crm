import React, { useEffect, useMemo, useState } from 'react';
import { IDeveloper, TeamList, TeamMembers } from 'mock/mockData';
import { useRouter } from 'next/router';
import TeamTable from 'components/Table';

function MembersTeam() {
    const [expiredDate, setExpiredDate] = useState<Array<IDeveloper>>();
    const [currentDate, serCurrentDate] = useState<Array<IDeveloper>>();
    const router = useRouter();
    const teamName = router.query.name;
    const singleTeam = useMemo(
        () => TeamMembers?.filter((item: TeamList) => item.teamName === teamName)[0]?.teamList,
        [TeamMembers],
    );
    useEffect(() => {
        if (Array.isArray(singleTeam)) {
            const expiredTeamMember = singleTeam?.filter(
                (item: IDeveloper) => new Date(item.period.endDate) < new Date(),
            );
            const currentMember = singleTeam?.filter((item: IDeveloper) => new Date(item.period.endDate) >= new Date());
            serCurrentDate(currentMember);
            setExpiredDate(expiredTeamMember);
        }
    }, []);

    return (
        <div>
            <h2>List of users working in {teamName}</h2>
            <TeamTable teamList={currentDate} />
            <h2>List of users that was working in {teamName}</h2>
            <TeamTable teamList={expiredDate} />
        </div>
    );
}

export default MembersTeam;
