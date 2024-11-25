import React, { useState } from 'react';

const TimeTracker = ({ employee, onStatusChange }) => {
  const [status, setStatus] = useState(employee.status || 'Clocked Out');
  const [timestamp, setTimestamp] = useState(employee.timestamp || null);

  const toggleStatus = () => {
    let currentStatus;
    if (status === 'Clocked In') {
      currentStatus = 'Clocked Out';
    } else {
      currentStatus = 'Clocked In';
    }
    setStatus(currentStatus);

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTimestamp(currentTime);

    onStatusChange(employee.name, currentStatus, currentTime);
  };

  return (
    <div style={{ margin: '10px 0' }}>
      <button onClick={toggleStatus}>

        {status === 'Clocked In' ? 'Clock Out' : 'Clock In'}
        
      </button>
    </div>
  );
};

export default TimeTracker;
