import React from 'react';
import PageTitle from '../page_title/PageTitle.jsx';
import LightBlueReportGeneration from '../../images/icons/light-blue-report-generation.svg'; // Light blue icon for Report Generation
import LightBlueStatisticalAnalysis from '../../images/icons/light-blue-statistical-analysis.svg'; // Light blue icon for Statistical Analysis
import LightBlueForecasting from '../../images/icons/light-blue-forecasting.svg'; // Light blue icon for Forecasting
import LightBlueDataVisualization from '../../images/icons/light-blue-data-visualization.svg'; // Light blue icon for Data Visualization
import LightBluePerformanceEvaluation from '../../images/icons/light-blue-performance-evaluation.svg'; // Light blue icon for Performance Evaluation
import './Analitics.css'; // Ensure you have the corresponding CSS file
import Common_block from '../common_block.jsx';
import SmoothCurveChart from '../curve_chart.jsx';

const AnalyticsAndReporting = () => {
  return (
    <>
      <PageTitle title="Аналітика та звіти" />
      <div className="om-content-container">
        <SmoothCurveChart />
        <Common_block
          title="Генерація звітів"
          icon={LightBlueReportGeneration}
        />
        <Common_block
          title="Статистичний аналіз"
          icon={LightBlueStatisticalAnalysis}
        />
        <Common_block title="Прогнозування" icon={LightBlueForecasting} />
        <Common_block
          title="Візуалізація даних"
          icon={LightBlueDataVisualization}
        />
        <Common_block
          title="Оцінка ефективності"
          icon={LightBluePerformanceEvaluation}
        />
      </div>
    </>
  );
};

export default AnalyticsAndReporting;
