import { useState } from "react";
import '../components/styles/addStudent.css'

const AddStudent =({onStudentAdded})=>{
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const student = {firstName, lastName, email};
        const username = 'wakil';
        const password = 'test123';
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        headers.append('Content-Type', 'application/json');

        try {
            const response = await fetch ("http://localhost:8080/api/student/create", {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(student)
            });
            if(!response.ok){
                throw new Error("Failed to add student");
            }

            const newStudent = await response.json();
            onStudentAdded(newStudent);
            setFirstName('');
            setLastName('');
            setEmail('');
        } catch (error) {
            console.error("Error adding student: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                type="text"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudent 