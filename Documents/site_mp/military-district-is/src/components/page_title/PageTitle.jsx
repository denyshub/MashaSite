import React from 'react';
import { Link } from 'react-router-dom';
import Settings from "../../images/icons/settings.svg";
import Help from "../../images/icons/help.svg";
import Logout from "../../images/icons/leave.svg";
import "./PageTitle.css";

const PageTitle = (props) => {
  return (
    <div className="main-title-container">
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="main-title-icons">
        <div className="gray-circle-back">
          <Link to="/settings">
            <img src={Settings} className="page-title-icon" alt="Settings" />
          </Link>
        </div>
        <div className="gray-circle-back">
        <Link to="/help">
          <img src={Help} className="page-title-icon" alt="Help" />
          </Link>
        </div>
        <div className="gray-circle-back">
        <Link to="/login">
          <img src={Logout} className="page-title-icon" alt="Logout" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
