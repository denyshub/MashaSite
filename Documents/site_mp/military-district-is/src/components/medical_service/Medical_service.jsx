import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../page_title/PageTitle.jsx';
import Patient from '../../images/icons/bluepatient.svg';
import Hospital from '../../images/icons/bluehospital.svg';
import Examination from '../../images/icons/blueexamination.svg';
import Ambulance from '../../images/icons/blueambulance.svg';
import Supply from '../../images/icons/bluesupply.svg';

import Common_block from '../common_block.jsx';

const Medical_service = () => {
  return (
    <>
      <PageTitle title="Медична служба" />
      <div className="om-content-container">
        <Common_block title="Облік пацієнтів" icon={Patient} />
        <Common_block title="Медичні огляди" icon={Examination} />
        <Common_block title="Управління госпіталями" icon={Hospital} />
        <Common_block title="Евакуація поранених" icon={Ambulance} />
        <Common_block title="Медичне постачання" icon={Supply} />
      </div>
    </>
  );
};

export default Medical_service;
