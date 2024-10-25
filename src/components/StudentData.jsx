import React, { useState } from "react";
import EditStudent from '../components/EditStudent';

const Student = ({ studentInformation, onDelete, onUpdate }) => {
    const { id, firstName, lastName, email, teachers } = studentInformation;
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (updatedStudent) => {
        onUpdate(id, updatedStudent);
        setIsEditing(false);
    };

    return (
        <>
            {isEditing ? (
                <EditStudent
                    studentInformation={studentInformation}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <div>
                    <p><strong>Id: </strong>{id}</p>
                    <p><strong>First Name: </strong>{firstName}</p>
                    <p><strong>Last Name: </strong>{lastName}</p>
                    <p><strong>Email: </strong>{email}</p>
                    <p><strong>Teachers: </strong>
                        {teachers.map((teacher, index) => (
                            <span key={index}>
                                {teacher.firstName} {teacher.lastName}{index < teachers.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                    <button className="del-button" onClick={() => setIsEditing(true)}>Update</button>
                    <button className="del-button" onClick={() => onDelete(id)}>Delete</button>
                </div>
            )}
        </>
    );
};

export default Student;
