import React from 'react';
import classNames from 'classnames';

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
          className={classNames(
            'mail-row__data',
            [`mail-row__data--${item}`],
            {
              'mail-row__data--true': sortBy === item,
              'mail-row__data--multiple-address-true': mailTo && mailTo.length > 1,
              [`mail-row__data--${item}-has-attachment`]: (['subject', 'date'].includes(item)) && mail['attachment'],
            },
          )}
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
