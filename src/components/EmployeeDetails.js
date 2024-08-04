import React, { useEffect, useState } from 'react';
import { getEmployeeById } from '../api';

const EmployeeDetails = ({ empId, onBack }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        fetchEmployee();
    }, [empId]);

    const fetchEmployee = async () => {
        const response = await getEmployeeById(empId);
        setEmployee(response.data);
    };

    if (!employee) return <p>Loading...</p>;

    return (
        <div>
            <h1>Employee Details</h1>
            <p>Name: {employee.name}</p>
            <p>Address: {employee.address.line1}, {employee.address.city}, {employee.address.country} - {employee.address.zip_code}</p>
            <h3>Contact Methods</h3>
            <ul>
                {employee.contact_methods.map((method, index) => (
                    <li key={index}>{method.contact_method}: {method.value}</li>
                ))}
            </ul>
            <button onClick={onBack}>Back</button>
        </div>
    );
};

export default EmployeeDetails;
