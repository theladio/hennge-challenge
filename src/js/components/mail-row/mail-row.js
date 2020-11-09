import React from 'react';

import './mail-row.scss';

const mailRowData = [
  'from',
  'to',
  'subject',
  'date',
];

const MailRow = ({ mail = {}, sortBy = 'date' }) => (
  <div className="mail-row">
    {mailRowData.map((item, key) => {
      const mailTo = item === 'to' ? mail[item].split(',') : {};

      return (
        <div
          className={
            `mail-row__data mail-row__data--${item} mail-row__data--${sortBy === item}${mailTo ? ` mail-row__data--multiple-address-${mailTo.length > 1}` : ''}`
          }
          data-hidden-address={`${mailTo.length > 1 ? `+${mailTo.length - 1}` : ''}`}
          key={`row-${key}`}
        >
          {(item === 'to' && mailTo.length > 1)
            ? `${mailTo[0]}, ...`
            : mail[item]}
        </div>
      )
    })}
  </div>
);

export default MailRow;
