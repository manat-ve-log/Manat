import React, { useState, useEffect } from 'react';
import { MeetingInterface } from '../../interface/IMeetingRoom';
import { GetMeetingRooms } from '../../service/https';
import { Link } from 'react-router-dom';
import './index.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";


function Index() {
    const [rooms, setRooms] = useState<MeetingInterface[]>([]);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [selectedRoom, setSelectedRoom] = useState<MeetingInterface | null>(null);

    useEffect(() => {
        const fetchRooms = async () => {
            const res = await GetMeetingRooms();
            if (res) {
                setRooms(res);
            }
        };
        fetchRooms();
    }, []);

    return (
        <div style={{ width: '100%', height: '95%', padding:'10px'}}> 
            <div className='BookingHeader'>
                <div className='BookingBefore'>
                    <AiOutlineArrowLeft/>
                    <Link className='BookingLinkBefore'to='/Meeting_Room'>Back</Link>
                </div>
                <div className='peopleicon'><GrUserManager/></div>
            </div>
            <div className='BookingShowData'>
                <div className="BookingShowDataGrid">
                    {rooms.map(room => (
                        <div className='BookingList' key={room.ID}>
                            <p>{room.RoomName}</p>
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    );
}

export default Index;
