import React, { FormEvent, useState } from 'react';
import moment from 'moment';
import { ExpiredTable, IDeveloper, TeamList, TeamMembers } from '../../mock/mockData';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { ButtonTypes, InputTypes } from '../../pages/example';
import { Button } from '../Button';
import style from './index.module.scss';
import ModalTeam from '../ModalTeam';

export interface Props {
    mockData: Array<TeamList>;
    teamList: Array<IDeveloper> | undefined | string;
    teamName: string | string[] | undefined;
    listWorkUsers?: boolean;
    setExpiredDate: (expiredDate: Array<IDeveloper | ExpiredTable>) => void;
    setMockData: (mockData: TeamList[]) => void;
}
function TeamTable(props: Props) {
    const { teamList, teamName, mockData, listWorkUsers, setExpiredDate, setMockData } = props;
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [showRemovePopup, setShowRemovePopup] = useState<boolean>(false);
    const [id, setTargetId] = useState<number>(0);
    const [isLight, setIsLight] = useState(false);

    function actionMove(event: FormEvent<HTMLButtonElement>) {
        setShowPopup(!showPopup);
        const target = event?.target as HTMLInputElement;
        setTargetId(+target.id);
    }

    function removeTeamMember(id: number) {
        setShowRemovePopup(!showRemovePopup);
    }

    function submitCancel() {
        setIsLight(!isLight);
        setShowRemovePopup(false);
    }
    function submitConfirm() {
        setIsLight(!isLight);
        if (Array.isArray(teamList)) {
            const indexDelete = teamList.indexOf(teamList[id]);
            setExpiredDate((prev: any)=>{
                return {
                    teamList: [prev, teamList[id]],
                };
            });
            teamList.splice(indexDelete, 1);
            setShowPopup(false);
        }
    }

    return (
        <div>
            {teamList?.length
                ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Slack Name</th>
                                <th>Period</th>
                                <th>Position</th>
                                {listWorkUsers && ( <th>Action</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(teamList) && 
                            teamList.map((item: IDeveloper, index) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.surname}</td>
                                            <td>{item.slackName}</td>
                                            <td>
                                                {moment(item.period.startDate).format('YYYY/MM/DD')} -{' '}
                                                {moment(item.period.endDate).format('YYYY/MM/DD')}
                                            </td>
                                            <td>{item.position}</td>
                                            {listWorkUsers && (
                                                <td>
                                                    <button id={`${index}`} onClick={actionMove}>
                                                        {item.action.move}
                                                    </button><button onClick={() => removeTeamMember(index)}>
                                                        {item.action.remove}
                                                    </button>
                                                </td>
                                            )}
                                        </tr>
                                    </React.Fragment>
                                );
                            })}
                            <tr>
                                <td>
                                    <ModalTeam
                                        teamName={teamName}
                                        setMockData={setMockData}
                                        setExpiredDate={setExpiredDate}
                                        mockData={mockData}
                                        teamList={teamList}
                                        id={id}
                                        showPopup={showPopup}
                                        setShowPopup={setShowPopup}
                                    />
                                    {showRemovePopup
                                        ? (
                                            <Modal
                                                close={() => {
                                                    setShowPopup(false);
                                                }}
                                            >
                                                <div className={style.block}>Do you realy want to delete?</div>
                                                <div className={style.buttonBlock}>
                                                    <Button status={ButtonTypes.primary} 
                                                        text={'Confirm'} isLight={isLight} onClick={submitConfirm} />
                                            &nbsp;
                                                    <Button onClick={submitCancel} status={ButtonTypes.primary} 
                                                        text={'Cancel'} isLight={isLight} />
                                                </div>
                                            </Modal>
                                        )
                                        : null}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
                : (
                    <div>No data found!</div>
                )}
        </div>
    );
}

export default TeamTable;
