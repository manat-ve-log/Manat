import React, { useState, useEffect } from 'react';
import { MeetingInterface } from '../../interface/IMeetingRoom';
import { GetMeetingRooms } from '../../service/https';
import './index.css'
import { GrClose } from "react-icons/gr";
import Booking from '../Booking/booking/booking';
import { IoFileTrayFullOutline } from "react-icons/io5";

const getTodayDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');       
    return `${year}-${month}-${day}`;
};

function Index() {
    const [rooms, setRooms] = useState<MeetingInterface[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>(getTodayDate());
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [selectedRoom, setSelectedRoom] = useState<MeetingInterface | null>(null);


    const onClickShowPopup = (room: MeetingInterface) => {
        setSelectedRoom(room);
        setShowPopup(true);
    };

    // Close popup
    const onClickClosePopup = () => {
        setShowPopup(false);
        setSelectedRoom(null);
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSelectedDate(event.target.value);
    };

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await GetMeetingRooms();
                if (res) {
                    setRooms(res);
                }
            } catch (error) {
                console.error('Failed to fetch meeting rooms:', error);
            }
        };
        fetchRooms();
    }, [selectedDate]);  

    return (
        <div style={{ width: '100%', height: '95%', padding:'10px'}}> 
            <div className='booking_list'>
                <div>
                    <span>Deatail</span>
                    <span>List</span>
                </div>
                <div>
                <div className='FindeTime'>
                        <div className="DateTime">
                            <input 
                                type="date" 
                                className="Date" 
                                value={selectedDate} 
                                onChange={handleDateChange} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='BookingShowData'>
                <div className="BookingShowDataGrid">
                    {rooms.length > 0 ? (
                        rooms.map(room => (
                            <div className='BookingList' onClick={() => onClickShowPopup(room)}key={room.ID}>
                                <p>{room.RoomName}</p>
                            </div>
                        ))
                    ) : (
                        <div style={{width:'100%',height:'70vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <IoFileTrayFullOutline style={{width:'200px',height:'200px',opacity:'0.3'}}/>
                        <p style={{opacity:'0.3'}}>No Available Space</p>
                        </div>
                    )}
                </div>
                {showPopup && selectedRoom &&
                <div className='BookingPopup'>
                    <div className='BookingSubmit'>
                        <Booking room={selectedRoom}/>
                        <div className='CloseBooking' onClick={onClickClosePopup}>
                            <GrClose/>
                        </div>
                    </div>
                </div>
                }
                
            </div>
        </div>
    );
}

export default Index;
