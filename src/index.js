import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './js/components/counter';
import DatePicker from './js/components/date-picker';

import './css/all.scss';

const Index = () => (
  <>
    <form>
      <DatePicker />
    </form>
    <Counter />
  </>
);

export default Index;

const henngeApp = document.getElementById('hennge-app');

henngeApp
  ? ReactDOM.render(<Index />, henngeApp)
  : null;
