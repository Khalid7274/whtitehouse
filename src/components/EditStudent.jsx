import { useState } from 'react';

const EditStudent = ({ studentInformation, onSave, onCancel }) => {
    const { id, firstName, lastName, email } = studentInformation;
    
    const [updatedFirstName, setUpdatedFirstName] = useState(firstName);
    const [updatedLastName, setUpdatedLastName] = useState(lastName);
    const [updatedEmail, setUpdatedEmail] = useState(email);

    const handleSave = () => {
        const updatedStudent = {
            ...studentInformation,
            firstName: updatedFirstName,
            lastName: updatedLastName,
            email: updatedEmail,
        };
        onSave(updatedStudent);
    };

    return (
        <div>
            <p><strong>Id: </strong>{id}</p>
            <label>First Name:</label>
            <input
                type='text'
                value={updatedFirstName}
                onChange={(e) => setUpdatedFirstName(e.target.value)}
            />
            <label>Last Name:</label>
            <input
                type='text'
                value={updatedLastName}
                onChange={(e) => setUpdatedLastName(e.target.value)}
            />
            <label>Email:</label>
            <input
                type='email'
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default EditStudent;
