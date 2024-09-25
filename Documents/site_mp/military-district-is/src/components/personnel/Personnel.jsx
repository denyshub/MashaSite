import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../page_title/PageTitle.jsx';

import './Personnel.css';

const Blue_Box_Personnel = (props) => {
  return <div className="box-personnel">{props.title}</div>;
};

const Statistic_Block = (props) => {
  return (
    <div className="statistic-block">
      <div>{props.title}</div>
      <div className="number-container-personnel">{props.number}</div>
    </div>
  );
};

const Personnel = () => {
  return (
    <>
      <PageTitle title="Особовий склад" />
      <h3 className="personnel-title">Управління особовим складом</h3>
      <div className="personnel-menu-container">
        <Blue_Box_Personnel title="Облік військовослужбовців" />
        <Blue_Box_Personnel title="Кадрове діловодство" />
        <Blue_Box_Personnel title="Облік нагород та стягнень" />
        <Blue_Box_Personnel title="Медичні картки" />
        <Blue_Box_Personnel title="Психологічна оцінка" />
      </div>
      <div className="personnel-statistic-container">
        <h3 className="">Статистика особового складу</h3>
        <div className="blocks-aligner">
          <Statistic_Block title="Загальна кількість" number="1,234" />
          <Statistic_Block title="Нові призовники" number="78" />
          <Statistic_Block title="На навчанні" number="156" />
        </div>
      </div>
    </>
  );
};

export default Personnel;
