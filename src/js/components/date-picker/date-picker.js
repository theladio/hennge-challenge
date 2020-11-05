import React, { useState } from 'react';

const DatePicker = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="date-picker">
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
      />
      -
      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
      />
    </div>
  );
}

export default DatePicker;
