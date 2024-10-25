import React from 'react';
import FetchStudentData from '../components/StudentDirectory';
import '../components/styles/student.css'; // Ensure the path is correct


const StudentPage = () => {

    return (
        <>
            <div className='st-details-container'>
                <FetchStudentData /> 
            </div>
        </>
    );
}

export default StudentPage;

