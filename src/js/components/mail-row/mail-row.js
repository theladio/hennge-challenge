import React, { useState } from 'react';
import classNames from 'classnames';

import './mail-row.scss';

const mailRowData = [
  'from',
  'to',
  'subject',
  'date',
];

const MailRow = ({ mail = {}, sortBy = 'date' }) => {
  const [showBody, setShowBody] = useState(false);

  return (
    <div
      onClick={() => setShowBody(!showBody)}
      className={classNames(
        'mail-row',
        {
          'mail-row--expanded': showBody,
        },
      )}
      role="button"
    >
      {mailRowData.map((item, key) => {
        const mailTo = item === 'to' ? mail[item].split(',') : {};
        const hasMultipleAddresses = mailTo && mailTo.length > 1;
        const isSubject = item === 'subject';

        return (
          <div
            className={classNames(
              'mail-row__data',
              [`mail-row__data--${item}`],
              {
                'mail-row__data--sort-by': sortBy === item,
                'mail-row__data--multiple-address': hasMultipleAddresses && !showBody,
                'mail-row__data--show': showBody,
                [`mail-row__data--has-attachment`]: isSubject && mail['attachment'],
              },
            )}
            data-hidden-address={`${hasMultipleAddresses ? `+${mailTo.length - 1}` : ''}`}
            key={`row-${key}`}
          >
            {(item === 'to' && hasMultipleAddresses && !showBody)
              ? `${mailTo[0]}, ...`
              : mail[item]}
          </div>
        )
      })}

      {showBody && (
        <div className="mail-row__data mail-row__data--body">
          <p dangerouslySetInnerHTML={{ __html: mail.body }} />
          {mail['attachment'] && (
            <a className="mail-row__data-attachment">attachment.pdf</a>
          )}
        </div>
      )}
    </div>
  );
};

export default MailRow;
