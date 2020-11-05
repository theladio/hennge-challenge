import React from 'react';

import './counter.scss';

const Counter = ({ count = 0 }) => (
  <div className="counter">
    Results: <span className="counter__number">{count}</span> mail(s)
  </div>
);

export default Counter;
