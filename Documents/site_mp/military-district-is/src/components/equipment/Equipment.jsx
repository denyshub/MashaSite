import React from 'react';
import PageTitle from '../page_title/PageTitle.jsx';
import DarkGear from '../../images/icons/dark-gear.svg'; // Іконка для обліку техніки
import DarkWeapon from '../../images/icons/dark-weapon.svg'; // Іконка для обліку озброєння
import DarkMaintenance from '../../images/icons/dark-maintenance.svg'; // Іконка для технічного обслуговування
import DarkRepair from '../../images/icons/dark-repair.svg'; // Іконка для ремонту
import DarkPurchases from '../../images/icons/dark-purchases.svg'; // Іконка для закупівель
import './Equipment.css';
import CommonBlock from '../common_block.jsx';

const EquipmentManagement = () => {
  return (
    <>
      <PageTitle title="Облік техніки та озброєння" />
      <div className="om-content-container">
        <CommonBlock title="Облік техніки" icon={DarkGear} />
        <CommonBlock title="Облік озброєння" icon={DarkWeapon} />
        <CommonBlock title="Технічне обслуговування" icon={DarkMaintenance} />
        <CommonBlock title="Ремонт та модернізація" icon={DarkRepair} />
        <CommonBlock title="Закупівлі та списання" icon={DarkPurchases} />
      </div>
    </>
  );
};

export default EquipmentManagement;
