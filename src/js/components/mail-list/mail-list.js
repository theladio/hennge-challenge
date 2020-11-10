import React, { useState } from 'react';
import classNames from 'classnames';

import MailRow from '../mail-row';
import Logo from '../../../assets/logo.png';

import './mail-list.scss';

const sortList = [
  'from',
  'to',
  'subject',
  'date',
];

const getDate = (dateArr) => {
  const len = dateArr.length;

  if (len === 1) {
    const [hours, minutes] = dateArr[0].split(':');
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.getTime();
  } else if (len === 3) {
    const [shortDate] = dateArr;
    const date = new Date(`${(new Date).getFullYear()} ${shortDate}`);
    return date.getTime();
  } else if (len === 4) {
    const [date] = dateArr;
    return (new Date(date)).getTime();
  }

  return 0;
};

const MailList = ({ mails = [] }) => {
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortMails = (type) => {
    if (type === sortBy) { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }
    else {
      setSortOrder('desc');
      setSortBy(type);
    }
  };

  const sortedMails = mails.sort((a, b) => {
    if (sortBy === 'date') {
      const dateRegex = /(?:(?:(\w{3})\s(\d*))|(?:(\d{4})\/(\d{1,2})\/(\d{1,2}))|(?:\d{1,2}:\d{1,2}))/;
      const matchesA = a.date.match(dateRegex).filter(Boolean);
      const matchesB = b.date.match(dateRegex).filter(Boolean);

      const dateA = getDate(matchesA);
      const dateB = getDate(matchesB);

      if (sortOrder === 'asc') {
        return dateA - dateB;
      }

      return dateB - dateA;
    }

    if (sortOrder === 'asc') {
      return - a[sortBy].localeCompare(b[sortBy]);
    }

    return - b[sortBy].localeCompare(a[sortBy]);
  });

  return (
    <div className={classNames(
      'mail-list',
      [`mail-list--${!!mails.length}`],
    )}>
      {mails.length
        ? (
          <>
            <div className="mail-list__sort">
              {sortList.map((type, key) => (
                <button
                  className={classNames(
                    'mail-list__sort-option',
                    {
                      'mail-list__sort-option--selected': sortBy === type,
                      [`mail-list__sort-option--${sortOrder}`]: sortBy === type,
                    },
                  )}
                  key={`sort-${key}`}
                  type="button"
                  onClick={() => sortMails(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            {sortedMails.map((item, key) => (
              <MailRow
                key={`mail-${key}`}
                sortBy={sortBy}
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
