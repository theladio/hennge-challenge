import React from 'react';
import ReactDOM from 'react-dom';

import Counter from '../../components/counter';
import DatePicker from '../../components/date-picker';

import '../../../css/all.scss';

const App = () => (
  <>
    <form>
      <DatePicker />
    </form>
    <Counter />
  </>
);

export default App;

const henngeApp = document.getElementById('hennge-app');

henngeApp
  ? ReactDOM.render(<App />, henngeApp)
  : null;
