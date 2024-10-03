import React, { useEffect, useState } from "react";
import axios from 'axios';

function FetchData() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            setError(err);
            console.log(err);
        });
    }, []);

    if (error) {
        return (
            <div className="container">
                <h3>Error Fetching Data</h3>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h3 className='text-2xl mb-9'><strong>Fetch Data from API React with Axios</strong></h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default FetchData;