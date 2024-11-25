import React from 'react';
import TimeTracker from './TimeTracker';

const EmployeeList = ({ employees, onStatusChange }) => {
  return (
    <div>
      {employees.map((employee, index) => {
     

        return (
          <div key={index} style={{ padding: '10px', border: '1px solid black', marginBottom: '10px' }}>

            <p> Name: {employee.name} </p>
            <p> Status:  {employee.status} </p>
            <p> Last Recorded Time : {employee.timestamp} </p>

            <TimeTracker
              employee={employee}
              onStatusChange={onStatusChange} />
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
