import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { TeamList, TeamMembers } from '../../mock/mockData';

function TeamListRow() {
    const [option, setOptionSelect] = useState<string>();
    const [mockData, setMockData] = useState<Array<TeamList>>([]);
    const router = useRouter();

    useEffect(()=>{
        setMockData(TeamMembers);
    }, []);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setOptionSelect(target.value);
    };
    return (
        <fieldset>
            <input type="text" list="search" onChange={handleChange} />
            <datalist id="search">
                {mockData.map((item: TeamList) => {
                    if (item.teamName === option) {
                        router.push(`/team/${item.teamName}`);
                    }
                    return (
                        <option value={item.teamName} key={item.id}>
                            {item.teamName}
                        </option>
                    );
                })}
            </datalist>
        </fieldset>
    );
}

export default TeamListRow;
