import React, { useState } from 'react';
import EmployeeList from './EmployeeList';

export default function App() {
  const employeeArray = [
    { name: 'Employee 1' },
    { name: 'Employee 2' },
  ];

  const [employees, setEmployees] = useState(
    employeeArray.map((employee) => ({
      ...employee,
      status: 'Clocked Out',
      timestamp: null,
    }))
  );

  
  const handleStatusChange = (name, newStatus, newTimestamp) => {
    const updatedEmployees = employees.map((employee) =>
      employee.name === name
        ? { ...employee, status: newStatus, timestamp: newTimestamp }
        : employee
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <EmployeeList employees={employees} onStatusChange={handleStatusChange} />
    </div>
  );
}
