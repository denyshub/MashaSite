import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Додаємо для посилань
import './Help.css';
import PageTitle from '../page_title/PageTitle'; // Імпорт компоненту для відображення заголовка
import Settings from "../../images/icons/settings.svg";
import Help from "../../images/icons/help.svg";
import Logout from "../../images/icons/leave.svg";

// Компонент для кожного пункту допомоги
const HelpItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="help-item">
      <div className="help-question" onClick={() => setIsOpen(!isOpen)}>
        <h4>{question}</h4>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="help-answer">{answer}</p>}
    </div>
  );
};

// Компонент для кожної категорії допомоги
const HelpCategory = ({ categoryTitle, helpItems }) => {
  return (
    <div className="help-category">
      <h3>{categoryTitle}</h3>
      <div className="help-list">
        {helpItems.map((item, index) => (
          <HelpItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

// Основний компонент сторінки допомоги
const HelpPage = () => {
  // Дані можуть бути динамічними
  const helpData = [
    {
      category: 'Основні питання',
      items: [
        {
          question: 'Як увійти в систему?',
          answer: 'Для входу в систему, введіть ваш логін та пароль на сторінці входу. Якщо у вас немає облікового запису, зверніться до адміністратора.',
        },
        {
          question: 'Як змінити пароль?',
          answer: 'Перейдіть до розділу "Налаштування" і оберіть "Зміна паролю". Введіть старий пароль, новий пароль та підтвердження.',
        },
      ],
    },
    {
      category: 'Налаштування системи',
      items: [
        {
          question: 'Як змінити мову інтерфейсу?',
          answer: 'У розділі "Налаштування" знайдіть пункт "Мова інтерфейсу" та виберіть бажану мову зі списку.',
        },
        {
          question: 'Як встановити часовий пояс?',
          answer: 'Перейдіть до "Системні налаштування" та оберіть "Часовий пояс". Виберіть ваш часовий пояс із випадаючого списку.',
        },
      ],
    },
    {
      category: 'Безпека',
      items: [
        {
          question: 'Що таке двофакторна аутентифікація?',
          answer: 'Двофакторна аутентифікація (2FA) забезпечує додатковий рівень безпеки, вимагаючи підтвердження особи за допомогою другого фактора, наприклад, коду з мобільного додатку.',
        },
        {
          question: 'Як активувати 2FA?',
          answer: 'Перейдіть до розділу "Безпека та автентифікація" у налаштуваннях і оберіть "Двофакторна аутентифікація". Слідуйте інструкціям для налаштування.',
        },
      ],
    },
  ];

  return (
    <div className="help-page">
      {/* Додаємо заголовок сторінки та іконки налаштувань, допомоги і виходу */}
      <div className="help-page-header">
        <div className="header-icons">
          <Link to="/settings">
            <img src={Settings} className="page-title-icon" alt="Settings" />
          </Link>
          <Link to="/logout">
            <img src={Logout} className="page-title-icon" alt="Logout" />
          </Link>
        </div>
      </div>

      {/* Виводимо категорії допомоги */}
      {helpData.map((category, index) => (
        <HelpCategory key={index} categoryTitle={category.category} helpItems={category.items} />
      ))}
    </div>
  );
};

export default HelpPage;
