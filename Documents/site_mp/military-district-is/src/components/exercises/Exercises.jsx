import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../page_title/PageTitle.jsx";
import PurplePlan from '../../images/icons/purpleplan.svg'
import PurpleAccounting from '../../images/icons/purpleaccounting.svg'
import PurpleTrainer from '../../images/icons/purpletariner.svg'
import PurpleCourse from '../../images/icons/purplecourse.svg'
import PurpleSpend from '../../images/icons/purplespend.svg'
import PurleReady from '../../images/icons/purpleready.svg'
import Common_block from "../common_block.jsx";
import SimpleBarChart from "../bar_chart.jsx";

const Block_ = (props) => {
  return (
    <div className="om-block-container">
      <div className="om-icon-title">
        <h3>{props.title}</h3>
      </div>
      <p style={{color: "#d87444"}}>{props.text1}</p>
      <p style={{color: "#d87444"}}>{props.text2}</p>
      <p style={{color: "#d87444"}}>{props.text3}</p>
    </div>
  );
};





const Exercises = () => {
  return (
    <>
      <PageTitle title="Навчання"/>
      <div className="om-content-container">
        <Common_block title="Планування навчань" icon={PurplePlan} />
        <Common_block title="Облік результатів" icon={PurpleAccounting}/>
        <Common_block title="Симуляції та тренажери" icon={PurpleTrainer}/>
        <Common_block title="Курси підвищення кваліфікації" icon={PurpleCourse}/>
        <Common_block title="Облік витрат ресурсів" icon={PurpleSpend}/>
        <Common_block title="Оцінка боєготовності" icon={PurleReady}/>
        
      </div>
    </>
  );
};

export default Exercises;
