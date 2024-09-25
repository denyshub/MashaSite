import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../page_title/PageTitle.jsx';
import GreenCalculator from '../../images/icons/green-calculator.svg'; // Example icon
import GreenReceipt from '../../images/icons/green-receipt.svg'; // Example icon
import GreenReport from '../../images/icons/green-report.svg'; // Example icon
import GreenMoneyBag from '../../images/icons/green-money-bag.svg'; // Example icon
import GreenShoppingCart from '../../images/icons/green-shopping-cart.svg'; // Example icon
import './Finances.css';
import Common_block from '../common_block.jsx';
import SimpleBarChart from '../bar_chart.jsx';

const Finances = () => {
  return (
    <>
      <PageTitle title="Фінанси та бюджет" />
      <div className="om-content-container">
        <Common_block title="Планування бюджету" icon={GreenCalculator} />
        <Common_block title="Облік витрат" icon={GreenReceipt} />
        <Common_block title="Фінансова звітність" icon={GreenReport} />
        <Common_block title="Заробтна плата" icon={GreenMoneyBag} />
        <Common_block title="Закупівлі" icon={GreenShoppingCart} />
      </div>
    </>
  );
};

export default Finances;
