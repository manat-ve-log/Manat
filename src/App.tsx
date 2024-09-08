import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

// import './App.css';
import Head from './component/Head';
import MeetingRoom from './page/meetingroom';
import Booking from './page/Booking';
import Edit from './page/Edit';
import Fulllyout from './Layout/fulllayout'
import Dashboard from './page/Dashboard';
import GraphLine from './component/Graph/Line';
import Sidebar from './component/Sidebar/Sidebar';




const styleBody:React.CSSProperties={
  minWidth: "320px",
  minHeight: "100vh",
};

const App: React.FC = () => {

  return (
    <div style={styleBody}>
      <Router>
        {/* <Head/> */}
        {/* <Fulllyout/> */}
        <Sidebar/>
        {/* <Bar/> */}
        {/* <Dashboard/> */}
        {/* <GraphLine/> */}
        {/* <MeetingRoom/> */}
        {/* <Edit/> */}
        {/* <Booking /> */}
      </Router>
    </div>

  );
};

export default App;