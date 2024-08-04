import React, { useState } from 'react';
import { createEmployee } from '../api';

const AddEmployee = ({ onAddComplete }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState({ line1: '', city: '', country: '', zip_code: '' });
    const [contactMethods, setContactMethods] = useState([{ contact_method: 'EMAIL', value: '' }]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEmployee = {
            name,
            address,
            contact_methods: contactMethods
        };
        await createEmployee(newEmployee);
        onAddComplete();
    };

    const handleContactChange = (index, field, value) => {
        const updatedMethods = contactMethods.map((method, i) =>
            i === index ? { ...method, [field]: value } : method
        );
        setContactMethods(updatedMethods);
    };

    const addContactMethod = () => {
        setContactMethods([...contactMethods, { contact_method: 'EMAIL', value: '' }]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Employee</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <h3>Address</h3>
            <input
                type="text"
                placeholder="Line 1"
                value={address.line1}
                onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Country"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Zip Code"
                value={address.zip_code}
                onChange={(e) => setAddress({ ...address, zip_code: e.target.value })}
                required
            />
            <h3>Contact Methods</h3>
            {contactMethods.map((method, index) => (
                <div key={index}>
                    <select
                        value={method.contact_method}
                        onChange={(e) => handleContactChange(index, 'contact_method', e.target.value)}
                    >
                        <option value="EMAIL">Email</option>
                        <option value="PHONE">Phone</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Value"
                        value={method.value}
                        onChange={(e) => handleContactChange(index, 'value', e.target.value)}
                        required
                    />
                </div>
            ))}
            <button type="button" onClick={addContactMethod}>Add Contact Method</button>
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;
