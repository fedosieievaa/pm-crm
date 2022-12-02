import React from 'react';
import moment from 'moment';
import { IDeveloper } from '../../pages/team/mockData';

function TeamTable(props: { teamList: Array<IDeveloper> | undefined | string }) {
    const { teamList } = props;
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(teamList) &&
                            teamList.map((item: IDeveloper) => {
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
                                            <td>
                                                {item.action.move}/{item.action.remove}
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                );
                            })}
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