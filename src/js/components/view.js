import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const View = () => {
  const [value, setValue] = useState('');

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default View;

const henngeApp = document.getElementById('hennge-app');

henngeApp
  ? ReactDOM.render(<View />, henngeApp)
  : null;
