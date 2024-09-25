import React, { useState } from 'react';
import './Sidebar.css'; // Для стилів сайдбара
import { Link } from 'react-router-dom';

// Імпорт іконок
import Analityca from '../../images/icons/analityca.svg';
import Communication from '../../images/icons/communication.svg';
import Finances from '../../images/icons/finances.svg';
import Logistyka from '../../images/icons/logistyka.svg';
import MainMenu from '../../images/icons/main-menu.svg';
import Medical from '../../images/icons/medical.svg';
import Navchannya from '../../images/icons/navchannya.svg';
import OperatyvUpr from '../../images/icons/operatyv-upr.svg';
import OsobSclad from '../../images/icons/osob-sclad.svg';
import RozvBezp from '../../images/icons/rozv-bezp.svg';
import Truck from '../../images/icons/truck.svg';

// Компонент для посилань в сайдбарі
const Sidebar_Link = ({ icon, text, to, isActive, onClick }) => {
  return (
    <li className={isActive ? 'active' : ''} onClick={onClick}>
      <Link to={to}>
        <img src={icon} alt={text} className="sidebar-icon" />
        {text}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/'); // Задаємо активний пункт

  return (
    <div className="sidebar">
      <h2>Система управління</h2>
      <ul>
        <Sidebar_Link 
          icon={MainMenu} 
          text='Головне меню' 
          to="/" 
          isActive={activeLink === '/'} 
          onClick={() => setActiveLink('/')}
        />
        <Sidebar_Link 
          icon={OsobSclad} 
          text='Особовий склад' 
          to="/personnel" 
          isActive={activeLink === '/personnel'} 
          onClick={() => setActiveLink('/personnel')}
        />
        <Sidebar_Link 
          icon={Truck} 
          text='Техніка та озброєння' 
          to="/tech" 
          isActive={activeLink === '/tech'} 
          onClick={() => setActiveLink('/tech')}
        />
        <Sidebar_Link 
          icon={OperatyvUpr} 
          text='Оперативне управління' 
          to="/operational_management" 
          isActive={activeLink === '/operational_management'} 
          onClick={() => setActiveLink('/operational_management')}
        />
        <Sidebar_Link 
          icon={Logistyka} 
          text='Логістика' 
          to="/logistics" 
          isActive={activeLink === '/logistics'} 
          onClick={() => setActiveLink('/logistics')}
        />
        <Sidebar_Link 
          icon={Navchannya} 
          text='Навчання' 
          to="/exercises" 
          isActive={activeLink === '/exercises'} 
          onClick={() => setActiveLink('/exercises')}
        />
        <Sidebar_Link 
          icon={RozvBezp} 
          text='Розвідка та безпека' 
          to="/intelligence" 
          isActive={activeLink === '/intelligence'} 
          onClick={() => setActiveLink('/intelligence')}
        />
        <Sidebar_Link 
          icon={Medical} 
          text='Медична служба' 
          to="/medical_service" 
          isActive={activeLink === '/medical_service'} 
          onClick={() => setActiveLink('/medical_service')}
        />
        <Sidebar_Link 
          icon={Finances} 
          text='Фінанси' 
          to="/finances" 
          isActive={activeLink === '/finances'} 
          onClick={() => setActiveLink('/finances')}
        />
        <Sidebar_Link 
          icon={Communication} 
          text='Комунікації' 
          to="/communication" 
          isActive={activeLink === '/communication'} 
          onClick={() => setActiveLink('/communication')}
        />
        <Sidebar_Link 
          icon={Analityca} 
          text='Аналітика' 
          to="/analytics" 
          isActive={activeLink === '/analytics'} 
          onClick={() => setActiveLink('/analytics')}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
