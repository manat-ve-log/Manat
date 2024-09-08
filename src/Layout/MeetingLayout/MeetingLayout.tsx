import React from 'react'
import './MeetingLayout.css'
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom'
import Meetingroom from '../../page/meetingroom'
function MeetingLayout() {
  return (
    <div style={{width:'95%',margin:'20px 0'}}>
        <div className="MeetingLayoutHead">
          <div className="MeetingLayout-Head">
            <div>MeetingRoom</div>
            <div className='Link-Booking-Edit'>
              <Link className='Link Link-Booking'to=''>
                <div className='iconBooking'><RiCalendarScheduleLine/></div>
                <div >Booking</div>
              </Link>
              <Link className='Link Link-Edit'to=''>
                <div><CiEdit/></div>
                <div>Edit</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="MeetingLayoutData">
          <Meetingroom/>
        </div>
    </div>
  )
}

export default MeetingLayout