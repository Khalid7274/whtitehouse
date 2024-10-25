import {useEffect, useState } from "react"
import FetchData from '../components/FetchData.jsx';

//[data, setData]
//[loading, setLoading]
//[error, set error]

const Datastream = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response is not ok");
                }
                return response.json();
            })
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
        <p>Total Posts: {data.length}</p>
            <ul>
                {data.map((receiveData) => (
                    <li key={receiveData.id}>
                    <FetchData postData={receiveData} />
                    <br />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Datastream