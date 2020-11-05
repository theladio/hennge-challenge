import React from 'react';
import ReactDOM from 'react-dom';

import Counter from '../../components/counter';
import DatePicker from '../../components/date-picker';

import '../../../css/all.scss';
import './app.scss';

const App = () => (
  <div className="app">
    <form className="app__form">
      <DatePicker />
    </form>
    <Counter />
  </div>
);

export default App;

const henngeApp = document.getElementById('hennge-app');

henngeApp
  ? ReactDOM.render(<App />, henngeApp)
  : null;
