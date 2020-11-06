import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Counter from '../../components/counter';
import DatePicker from '../../components/date-picker';
import MailList from '../../components/mail-list';

import mailData from '../../data/mails';

import '../../../css/all.scss';
import './app.scss';

const App = () => {
  const [showMails, setShowMails] = useState(false);

  return (
    <div className="app">
      <form className="app__form">
        <DatePicker onChange={() => setShowMails(true)} />
      </form>
      <Counter />
      <MailList mails={showMails && mailData} />
    </div>
  );
};

export default App;

const henngeApp = document.getElementById('hennge-app');

henngeApp
  ? ReactDOM.render(<App />, henngeApp)
  : null;
