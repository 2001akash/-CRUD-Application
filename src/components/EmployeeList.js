import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../api';

const EmployeeList = ({ onSelectEmployee, onAddEmployee }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await getEmployees();
        setEmployees(response.data);
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };

    return (
        <div>
            <h1>Employee List</h1>
            {employees.length === 0 ? (
                <p>No Employees in the system.</p>
            ) : (
                <ul>
                    {employees.map(emp => (
                        <li key={emp.emp_id}>
                            {emp.name} ({emp.emp_id})
                            <button onClick={() => onSelectEmployee(emp.emp_id)}>Details</button>
                            <button onClick={() => handleDelete(emp.emp_id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={onAddEmployee}>Add Employee</button>
        </div>
    );
};

export default EmployeeList;
