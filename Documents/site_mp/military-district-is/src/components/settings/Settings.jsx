import React from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';
import Settings from '../../images/icons/settings.svg';
import Help from '../../images/icons/help.svg';
import Logout from '../../images/icons/leave.svg';
import '../help/Help.css';
const SettingItem = ({ title }) => {
  return (
    <div className="setting-item">
      <p>{title}</p>
      {/* Можна додати кнопку або іконку для редагування/настроювання */}
    </div>
  );
};

const SettingsCategory = ({ categoryTitle, settings }) => {
  return (
    <div className="settings-category">
      <h3>{categoryTitle}</h3>
      <div className="settings-list">
        {settings.map((setting, index) => (
          <SettingItem key={index} title={setting} />
        ))}
      </div>
    </div>
  );
};

const SettingsPage = () => {
  // Дані про налаштування можуть бути динамічними, їх можна отримувати з сервера
  const settingsData = [
    {
      category: 'Безпека та автентифікація',
      items: [
        'Зміна паролю',
        'Двофакторна аутентифікація (2FA)',
        'Керування сесіями',
        'Журнал активності',
        'Налаштування рівнів доступу',
      ],
    },
    {
      category: 'Особисті дані',
      items: [
        'Редагування профілю',
        'Налаштування контактної інформації',
        'Завантаження аватара',
        'Налаштування сповіщень',
      ],
    },
    {
      category: 'Системні налаштування',
      items: [
        'Мова інтерфейсу',
        'Часовий пояс',
        'Оновлення системи',
        'Налаштування інтерфейсу',
      ],
    },
  ];

  return (
    <>
      <div className="settings-page">
        <div className="help-page-header">
          <div className="header-icons">
            <Link to="/help">
              <img src={Help} className="page-title-icon" alt="Logout" />
            </Link>
            <Link to="/login">
              <img src={Logout} className="page-title-icon" alt="Logout" />
            </Link>
          </div>
        </div>
        {settingsData.map((category, index) => (
          <SettingsCategory
            key={index}
            categoryTitle={category.category}
            settings={category.items}
          />
        ))}
      </div>
    </>
  );
};

export default SettingsPage;
