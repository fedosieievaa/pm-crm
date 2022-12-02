import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import { TeamList, TeamMembers } from './mockData';

function TeamList() {
    const [option, setOptionSelect] = useState<string>();
    const router = useRouter();
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setOptionSelect(target.value);
    };
    return (
        <fieldset>
            <input type="text" list="search" onChange={handleChange} />
            <datalist id="search">
                {TeamMembers.map((item: TeamList) => {
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

export default TeamList;
