import { useEffect, useState } from 'react'
import Dashboard from '../page/Dashboard'
import { Route,Routes } from 'react-router-dom'
import Sidebar from '../component/Sidebar/Sidebar'
import Meeting_Room from '../page/MeetingRoom/Meeting_Room'
// import MeetingRoom from '../page/meetingroom'
import MeetingLayout from './MeetingLayout/MeetingLayout'
import Edit from '../page/Edit'



function fulllayout() {
  
  return (
    <div style={{display:'flex',width:'100%',height:'100vh',position:'relative'}}>
        <div style={{}}>
          <Sidebar />
        </div>
        <div style={{marginLeft:'270px',width:'100%'}}>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/MeetingRoom" element={<MeetingLayout />} />
            <Route path="/Meeting_Room" element={<Meeting_Room />} />
            <Route path="/Meeting_Room/Edit" element={<Edit />} />
          </Routes>
        </div>
    </div>
  )
}

export default fulllayout