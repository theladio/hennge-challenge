import React from 'react';

import './mail-row.scss';

const MailRow = ({ mail = {} }) => (
  <div className="mail-row">
    {console.log(mail)}
  </div>
);

export default MailRow;
