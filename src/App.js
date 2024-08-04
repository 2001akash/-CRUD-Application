import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';

const App = () => {
    const [currentPage, setCurrentPage] = useState('list');
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    const handleSelectEmployee = (empId) => {
        setSelectedEmployeeId(empId);
        setCurrentPage('details');
    };

    const handleAddEmployee = () => {
        setCurrentPage('add');
    };

    const handleBack = () => {
        setCurrentPage('list');
    };

    return (
        <div>
            {currentPage === 'list' && (
                <EmployeeList
                    onSelectEmployee={handleSelectEmployee}
                    onAddEmployee={handleAddEmployee}
                />
            )}
            {currentPage === 'details' && (
                <EmployeeDetails
                    empId={selectedEmployeeId}
                    onBack={handleBack}
                />
            )}
            {currentPage === 'add' && (
                <AddEmployee
                    onAddComplete={handleBack}
                />
            )}
        </div>
    );
};

export default App;
