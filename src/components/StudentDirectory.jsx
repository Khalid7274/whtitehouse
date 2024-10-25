import { useEffect, useState } from "react";
import Student from '../components/StudentData.jsx';
import AddStudent from "../components/AddStudent.jsx";
import './styles/student.css';
import '../components/styles/topHeader.css';

const FetchStudentData = () => {
    const [studentData, setStudentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const username = 'john';
        const password = 'test123';
        const headers = new Headers();

        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

        console.log("Fetching data...");

        fetch("http://localhost:8080/api/student/all", { headers: headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network not responding!");
                }
                return response.json();
            })
            .then((result) => {
                console.log("Data fetched successfully: ", result);
                setStudentData(result);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    {/* Delete Functionality*/}

    const handleDelete = async (id) => {
        const username = 'haroon';
        const password = 'test123';
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

        try {
            const response = await fetch(`http://localhost:8080/api/student/delete/${id}`, {
                method: 'DELETE',
                headers: headers
            });

            if (!response.ok) {
                throw new Error("Failed to delete student");
            }

            // Update the state to remove the deleted student
            setStudentData((prevData) => prevData.filter((student) => student.id !== id));
        } catch (error) {
            console.error("Error deleting student: ", error);
            setError(error.message);
        }
    };

    {/*Handle Update*/}

    const handleUpdate = async (id, updatedStudent) => {
        const username = 'wakil';
        const password = 'test123';
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        headers.append('Content-Type', 'application/json');

        try {
            const response = await fetch(`http://localhost:8080/api/student/update/${id}`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(updatedStudent)
            });

            if (!response.ok) {
                throw new Error("Failed to update student");
            }

            const result = await response.json();
            setStudentData((prevData) =>
                prevData.map((student) => (student.id === id ? result : student))
            );
        } catch (error) {
            console.error("Error updating student: ", error);
            setError(error.message);
        }
    };

    {/*Add Student functionality*/}

    const handleStudentAdded = (newStudent) =>{
        setStudentData((prevData)=> [...prevData, newStudent]);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
        <div className="st-data">
        <AddStudent onStudentAdded={handleStudentAdded} />
        <ul>
            {studentData.map((studentInfo) => (
                 <li key={studentInfo.id}>
                     <Student
                        studentInformation={studentInfo}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FetchStudentData;
