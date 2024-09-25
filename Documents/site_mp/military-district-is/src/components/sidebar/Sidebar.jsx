import React, { useState, useEffect } from 'react';
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

  // Завантажуємо активне посилання з localStorage при монтуванні компонента
  useEffect(() => {
    const savedLink = localStorage.getItem('activeLink');
    if (savedLink) {
      setActiveLink(savedLink);
    }
  }, []);

  // Функція для оновлення активного посилання
  const handleLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem('activeLink', link); // Зберігаємо активне посилання в localStorage
  };

  return (
    <div className="sidebar">
      <h2>Система управління</h2>
      <ul>
        <Sidebar_Link
          icon={MainMenu}
          text="Головне меню"
          to="/"
          isActive={activeLink === '/'}
          onClick={() => handleLinkClick('/')}
        />
        <Sidebar_Link
          icon={OsobSclad}
          text="Особовий склад"
          to="/personnel"
          isActive={activeLink === '/personnel'}
          onClick={() => handleLinkClick('/personnel')}
        />
        <Sidebar_Link
          icon={Truck}
          text="Техніка та озброєння"
          to="/equipment"
          isActive={activeLink === '/tech'}
          onClick={() => handleLinkClick('/tech')}
        />
        <Sidebar_Link
          icon={OperatyvUpr}
          text="Оперативне управління"
          to="/operational_management"
          isActive={activeLink === '/operational_management'}
          onClick={() => handleLinkClick('/operational_management')}
        />
        <Sidebar_Link
          icon={Logistyka}
          text="Логістика"
          to="/logistics"
          isActive={activeLink === '/logistics'}
          onClick={() => handleLinkClick('/logistics')}
        />
        <Sidebar_Link
          icon={Navchannya}
          text="Навчання"
          to="/exercises"
          isActive={activeLink === '/exercises'}
          onClick={() => handleLinkClick('/exercises')}
        />
        <Sidebar_Link
          icon={RozvBezp}
          text="Розвідка та безпека"
          to="/intelligence"
          isActive={activeLink === '/intelligence'}
          onClick={() => handleLinkClick('/intelligence')}
        />
        <Sidebar_Link
          icon={Medical}
          text="Медична служба"
          to="/medical_service"
          isActive={activeLink === '/medical_service'}
          onClick={() => handleLinkClick('/medical_service')}
        />
        <Sidebar_Link
          icon={Finances}
          text="Фінанси"
          to="/finances"
          isActive={activeLink === '/finances'}
          onClick={() => handleLinkClick('/finances')}
        />
        <Sidebar_Link
          icon={Communication}
          text="Комунікації"
          to="/communication"
          isActive={activeLink === '/communication'}
          onClick={() => handleLinkClick('/communication')}
        />
        <Sidebar_Link
          icon={Analityca}
          text="Аналітика"
          to="/analytics"
          isActive={activeLink === '/analytics'}
          onClick={() => handleLinkClick('/analytics')}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
