import React from 'react';

import './mail-row.scss';

const MailRow = ({ mail = {} }) => (
  <div className="mail-row">
    <div className="mail-row__data mail-row__data--from">
      {mail.from}
    </div>
    <div className="mail-row__data mail-row__data--to">
      {mail.to}
    </div>
    <div className="mail-row__data mail-row__data--subject">
      {mail.subject}
    </div>
    <div className="mail-row__data mail-row__data--date">
      {mail.date}
    </div>
  </div>
);

export default MailRow;
