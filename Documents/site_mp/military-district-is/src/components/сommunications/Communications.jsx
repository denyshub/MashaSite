import React from "react";
import PageTitle from "../page_title/PageTitle.jsx";
import YellowNetworkManagement from '../../images/icons/yellow-network-management.svg'; // Yellow icon for Network Management
import YellowCryptography from '../../images/icons/yellow-cryptography.svg'; // Yellow icon for Cryptography
import YellowElectronicWarfare from '../../images/icons/yellow-electronic-warfare.svg'; // Yellow icon for Electronic Warfare
import YellowSatelliteCommunication from '../../images/icons/yellow-satellite-communication.svg'; // Yellow icon for Satellite Communication
import YellowFieldMail from '../../images/icons/yellow-field-mail.svg'; // Yellow icon for Field Mail
import "./Communications.css"; // Ensure you have the corresponding CSS file
import Common_block from "../common_block.jsx";

const CommunicationsAndNetworking = () => {
  return (
    <>
      <PageTitle title="Комунікації та зв'язок"/>
      <div className="om-content-container">
        <Common_block title="Управління мережами зв'язку" icon={YellowNetworkManagement} />
        <Common_block title="Криптографічний захист" icon={YellowCryptography} />
        <Common_block title="Радіоелектронна боротьба" icon={YellowElectronicWarfare} />
        <Common_block title="Супутниковий зв'язок" icon={YellowSatelliteCommunication} />
        <Common_block title="Польова пошта" icon={YellowFieldMail} />
      </div>
    </>
  );
};

export default CommunicationsAndNetworking;
