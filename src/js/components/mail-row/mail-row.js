import React from 'react';

import './mail-row.scss';

const MailRow = ({ mail = {} }) => (
  <div className="mail-row">
    <div className="mail-row__data">
      {mail.from}
    </div>
    <div className="mail-row__data">
      {mail.to}
    </div>
    <div className="mail-row__data">
      {mail.subject}
    </div>
    <div className="mail-row__data">
      {mail.date}
    </div>
  </div>
);

export default MailRow;
