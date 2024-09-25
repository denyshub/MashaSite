import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../page_title/PageTitle.jsx';
import Calendar from '../../images/icons/calendar.svg';
import Checkbox from '../../images/icons/checkbox.svg';
import Monitoring from '../../images/icons/monitoring.svg';
import Analitics from '../../images/icons/analitics.svg';
import Coordination from '../../images/icons/keruvpidrozd.svg';
import './Operational_management.css';
import Common_block from '../common_block.jsx';

const Operational_management = () => {
  return (
    <>
      <PageTitle title="Оперативне управління" />
      <div className="om-content-container">
        <Common_block title="Планування операцій" icon={Calendar} />
        <Common_block title="Управління завданнями" icon={Checkbox} />
        <Common_block title="Моніторинг виконання" icon={Monitoring} />
        <Common_block title="Аналіз результатів" icon={Analitics} />
        <Common_block title="Координація підрозділів" icon={Coordination} />
      </div>
    </>
  );
};

export default Operational_management;
