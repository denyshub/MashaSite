import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../page_title/PageTitle.jsx";
import Analityca from "../../images/icons/analityca.svg";
import Communication from "../../images/icons/communication.svg";
import Finances from "../../images/icons/finances.svg";
import Logistyka from "../../images/icons/logistyka.svg";
import MainMenu from "../../images/icons/main-menu.svg";
import Medical from "../../images/icons/medical.svg";
import Navchannya from "../../images/icons/navchannya.svg";
import OperatyvUpr from "../../images/icons/operatyv-upr.svg";
import OsobSclad from "../../images/icons/osob-sclad.svg";
import RozvBezp from "../../images/icons/rozv-bezp.svg";
import Truck from "../../images/icons/truck.svg";
import "./Main.css";

const Blue_Box = (props) => {
  return (
    <div className="box-main" style={{ backgroundColor: props.color }}>
      <div className="box-line-main">
        <p className="main-box-title">{props.title}</p>
        <img src={props.icon} alt="" className="sidebar-icon" />
      </div>
      <div className="number-container-main">{props.number}</div>
    </div>
  );
};

const Gray_Line = (props) => {
  return (
    <div className="gray-line-main" >
  
        <p className="gray-line-title">{props.title}</p>
        <p className="gray-line-title">{props.time} тому</p>
  
    </div>
  );
};


const Main = () => {
  return (
    <div className="main">
      <PageTitle title="Головне меню" />
      <div className="main-menu-container">
        <Blue_Box title="Особовий склад" icon={OsobSclad} number="1234" color='#3b82f6'/>
        <Blue_Box title="Техніка" icon={Truck} number="567" color='#21c65e'/>
        <Blue_Box title="Активні операції" icon={OperatyvUpr} number="12" color='#f04444'/>
        <Blue_Box title="Запаси" icon={Logistyka} number="89%" color='#e9b308'/>
        <Blue_Box title="Навчання" icon={Navchannya} number="23" color='#a755f8'/>
        <Blue_Box title="Інциденти безпеки" icon={RozvBezp} number="3" color='#6465f3'/>
      </div>
      <div className="last-actions">
        <h2 className="last-actions-title">Останні події</h2>
      <Gray_Line title="Завершено навчання новобранців" time="2 години"/>
      <Gray_Line title="Оновлено програмне забезпечення систем зв'язку" time="5 годин"/>
      <Gray_Line title="Проведено технічне обслуговування техніки" time="1 день"/>
      </div>
    </div>
  );
};

export default Main;
