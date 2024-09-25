import React from 'react';
import PageTitle from '../page_title/PageTitle.jsx';
import GreenDataCollection from '../../images/icons/green-data-collection.svg'; // Example icon for Data Collection
import GreenThreatAnalysis from '../../images/icons/green-threat-analysis.svg'; // Example icon for Threat Analysis
import GreenCounterintelligence from '../../images/icons/green-counterintelligence.svg'; // Example icon for Counterintelligence
import GreenCybersecurity from '../../images/icons/green-cybersecurity.svg'; // Example icon for Cybersecurity
import GreenInformationProtection from '../../images/icons/green-information-protection.svg'; // Example icon for Information Protection
import './Intelligence.css'; // Create a corresponding CSS file
import Common_block from '../common_block.jsx';

const IntelligenceAndSecurity = () => {
  return (
    <>
      <PageTitle title="Розвідка та безпека" />
      <div className="om-content-container">
        <Common_block title="Збір розвідданих" icon={GreenDataCollection} />
        <Common_block title="Аналіз загроз" icon={GreenThreatAnalysis} />
        <Common_block title="Контррозвідка" icon={GreenCounterintelligence} />
        <Common_block title="Кібербезпека" icon={GreenCybersecurity} />
        <Common_block
          title="Захист інформації"
          icon={GreenInformationProtection}
        />
      </div>
    </>
  );
};

export default IntelligenceAndSecurity;
