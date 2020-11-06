import React, { useState } from 'react';

import MailRow from '../mail-row';
import Logo from '../../../assets/logo.png';

import './mail-list.scss';

const sortList = [
  'from',
  'to',
  'subject',
  'date',
];

const MailList = ({ mails = [] }) => {
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  const sortMails = (type) => {
    if (type === sortBy) { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }
    else {
      setSortOrder('asc');
      setSortBy(type);
    }
  };

  return (
    <div className={
      `mail-list mail-list--${!!mails.length}`
    }>
      {mails.length
        ? (
          <>
            <div className="mail-list__sort">
              {sortList.map((type, key) => (
                <button
                  className="mail-list__sort-option"
                  key={`sort-${key}`}
                  type="button"
                  onClick={() => sortMails(type)}
                >
                  {type}
                  {sortBy === type && (
                    <span className="mail-list__sort-option-selected">
                      {sortOrder === 'asc' ? '▲' : '▼'}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {mails.map((item, key) => (
              <MailRow
                key={`mail-${key}`}
                mail={item}
              />
            ))}
          </>
        ) : (
          <img src={Logo} alt="Mail Archiver" />
        )
      }
    </div>
  );
};

export default MailList;
