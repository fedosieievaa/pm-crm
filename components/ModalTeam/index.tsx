import React, { FormEvent, useState } from 'react';
import { ExpiredTable, IDeveloper, TeamList, TeamMembers } from '../../mock/mockData';
import { InputTypes, ButtonTypes } from '../../pages/example';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';
import style from './index.module.scss';

export interface Props {
    teamList: Array<IDeveloper> | undefined | string;
    id: number;
    showPopup: boolean;
    setShowPopup: (showPopup: boolean) => void;
    teamName: string | string[] | undefined;
    mockData: Array<TeamList>;
    setExpiredDate: (expiredDate: Array<IDeveloper | ExpiredTable>) => void;
    setMockData: (mockData: TeamList[]) => void;
}

function ModalTeam(props: Props) {
    const { teamList, id, showPopup, setShowPopup, teamName, mockData, setExpiredDate, setMockData } = props;
    const [isLight, setIsLight] = useState(false);
    const [inputValue, setInputValue] = useState<string>('');

    function submitCancel() {
        setIsLight(!isLight);
        setShowPopup(false);
    }

    function submitConfirm() {
        setIsLight(!isLight);
        if (Array.isArray(teamList)) {
            mockData.map((item, index) => {
                if (item.teamName === inputValue && Array.isArray(teamList)) {
                    item.teamList.push(teamList[id]);
                    setMockData(mockData); 
                }else if(item.teamName === teamName) {
                    const indexDelete = teamList.indexOf(teamList[id]);
                    setExpiredDate((prev: any )=>{
                        return {
                            teamList: [...prev, teamList[id]],
                        };
                    });
                    teamList.splice(indexDelete, 1);
                }
                setShowPopup(false);
            });
        }
    }
 
    return (
        <div>
            {showPopup
                ? (
                    <Modal
                        close={() => {
                            setShowPopup(false);
                        }}
                    >
                        {Array.isArray(teamList) && teamList[id]?.name && teamList[id]?.surname}
                        <div className={style.block}>
                            <Input
                                placeholder="Choose team"
                                onChange={(e: FormEvent<HTMLInputElement>) => {
                                    setInputValue((e.target as HTMLInputElement).value);
                                }}
                                value={inputValue}
                                list={'search'}
                                status={InputTypes.primary}
                            />
                            <datalist id="search">
                                {TeamMembers.map((item: TeamList) => {
                                    return (
                                        <option value={item.teamName} key={item.id}>
                                            {item.teamName}
                                        </option>
                                    );
                                })}
                            </datalist>
                        </div>
                        <div className={style.buttonBlock}>
                            <Button
                                status={ButtonTypes.primary}
                                onClick={submitConfirm}
                                text={'Confirm'}
                                isLight={isLight}
                            />
                        &nbsp;
                            <Button status={ButtonTypes.primary} 
                                onClick={submitCancel} text={'Cancel'} isLight={isLight} />
                        </div>
                    </Modal>
                )
                : null}
        </div>
    );
}

export default ModalTeam;
