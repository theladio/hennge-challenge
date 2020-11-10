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
  const selectedDates = (e) => {
    console.log(e);
    setShowMails(true);
  }

  return (
    <div className="app">
      <form className="app__form">
        <DatePicker onChange={(e) => selectedDates(e)} />
      </form>
      <Counter count={showMails ? mailData.length : 0} />
      {showMails && mailData && (
        <MailList mails={mailData} />
      )}
    </div>
  );
};

export default App;

const henngeApp = document.getElementById('hennge-app');

henngeApp
  ? ReactDOM.render(<App />, henngeApp)
  : null;
