import React from 'react';

const FlightInfo = ({ personalInfo }) => {
    const { ename, lastname, age, passportNumber, seatNumber, phone } = personalInfo;
    return (
        <tr>
            <td>{ename}</td>
            <td>{lastname}</td>
            <td>{age}</td>
            <td>{passportNumber}</td>
            <td>{seatNumber}</td>
            <td>{phone}</td>
        </tr>
    );
};

export default FlightInfo;
