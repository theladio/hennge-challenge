import React from 'react';

import MailRow from '../mail-row';
import Logo from '../../../assets/logo.png';

import './mail-list.scss';

const MailList = ({ mails = [] }) => (
  <div className={
    `mail-list mail-list--${!!mails.length}`
  }>
    {mails.length
      ? mails.map((item, key) => (
        <MailRow
          key={`mail-${key}`}
          mail={item}
        />
      )) : (
        <img src={Logo} alt="Mail Archiver" />
      )
    }
  </div>
);

export default MailList;
