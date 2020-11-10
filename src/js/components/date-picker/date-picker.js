import React, { useState } from 'react';

import './date-picker.scss';

const DatePicker = ({ onChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const setDate = (set) => (event) => {
    set(event.target.value);
  }
  const searchSubmit = (e) => {
    e.preventDefault();
    onChange({ startDate, endDate });
  }
  const inputProps = {
    className: 'date-picker__input',
    type: 'date',
    min: '1900-01-01',
    max: '2999-12-31',
  };

  return (
    <label
      className="date-picker"
      htmlFor="startDate"
    >
      <div className="date-picker__group">
        <input
          id="startDate"
          value={startDate}
          onChange={setDate(setStartDate)}
          {...inputProps}
        />
        -
        <input
          value={endDate}
          onChange={setDate(setEndDate)}
          {...inputProps}
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
