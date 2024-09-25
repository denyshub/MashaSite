import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../page_title/PageTitle.jsx';
import OrangeBox from '../../images/icons/orangebox.svg';
import OrangeTruck from '../../images/icons/orangetruck.svg';
import OrangeBag from '../../images/icons/orangebag.svg';
import OrangeCoins from '../../images/icons/orangecoins.svg';
import OrangeDollar from '../../images/icons/orangedollar.svg';
import './Logistics_supply.css';
import Common_block from '../common_block.jsx';
import SimpleBarChart from '../bar_chart.jsx';

const Block_ = (props) => {
  return (
    <div className="om-block-container">
      <div className="om-icon-title">
        <h3>{props.title}</h3>
      </div>
      <p style={{ color: '#d87444' }}>{props.text1}</p>
      <p style={{ color: '#d87444' }}>{props.text2}</p>
      <p style={{ color: '#d87444' }}>{props.text3}</p>
    </div>
  );
};

const Logistics_supply = () => {
  return (
    <>
      <PageTitle title="Логістика та постачання" />
      <div className="om-content-container">
        <Common_block title="Управління запасами" icon={OrangeBox} />
        <Common_block title="Планування поставок" icon={OrangeTruck} />
        <Common_block title="Транспортна логістика" icon={OrangeBag} />
        <Common_block title="Склади та сховища" icon={OrangeCoins} />
        <Common_block title="Облік витрат ресурсів" icon={OrangeDollar} />
        <SimpleBarChart />
        <Block_
          title="Швидкий доступ"
          text1="Останні поставки"
          text2="Критичні запаси"
          text3="Звіт про витрати"
        />
      </div>
    </>
  );
};

export default Logistics_supply;
