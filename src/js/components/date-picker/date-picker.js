import React, { useState } from 'react';

import './date-picker.scss';

const DatePicker = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const setDate = (set) => (event) => set(event.target.value);
  const searchSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <label
      className="date-picker"
      htmlFor="startDate"
    >
      <div className="date-picker__group">
        <input
          className="date-picker__input"
          id="startDate"
          type="date"
          value={startDate}
          onChange={setDate(setStartDate)}
        />
        -
        <input
          className="date-picker__input"
          type="date"
          value={endDate}
          onChange={setDate(setEndDate)}
        />
      </div>
      <button
        className="date-picker__submit"
        type="submit"
        value={endDate}
        onClick={searchSubmit}
      />
    </label>
  );
};

export default DatePicker;
