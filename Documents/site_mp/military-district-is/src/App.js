import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Personnel from './components/personnel/Personnel';
import ScrollToTop from './components/scroll';
import Operational_management from './components/operational_management/Operational_management';
import Logistics_supply from './components/logistics_supply/Logistics_supply';
import Medical_service from './components/medical_service/Medical_service';
import Exercises from './components/exercises/Exercises';
import Finances from './components/finances/Finances'
import IntelligenceAndSecurity from './components/intelligence/Intelligence';
import CommunicationsAndNetworking from './components/сommunications/Communications';
import AnalyticsAndReporting from './components/analitics/Analitics';
import SettingsPage from './components/settings/Settings';
import HelpPage from './components/help/Help';
import LoginPage from './components/login/Login';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="" element={<Main />} />
            <Route path='/personnel' element={<Personnel/>}/>
            <Route path='/operational_management' element={<Operational_management/>}/>
            <Route path='/logistics' element={<Logistics_supply/>}/>
            <Route path='/medical_service' element={<Medical_service/>}/>
            <Route path='/exercises' element={<Exercises/>}/>
            <Route path='/finances' element={<Finances/>}/>
            <Route path='/intelligence' element={<IntelligenceAndSecurity/>}/>
            <Route path='/communication' element={<CommunicationsAndNetworking/>}/>
            <Route path='/analytics' element={<AnalyticsAndReporting/>}/>
            <Route path='/settings' element={<SettingsPage/>}/>
            <Route path='/help' element={<HelpPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
