import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Meeting_Room.css';
import { GetMeetingRooms } from '../../service/https';
import EditPopup from '../MeetingRoom/edit/index'; // Assuming Edit is the popup component
import { MeetingInterface } from '../../interface/IMeetingRoom';

const Meeting_Room: React.FC = () => {
    const [rooms, setRooms] = useState<MeetingInterface[]>([]);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [selectedRoom, setSelectedRoom] = useState<MeetingInterface | null>(null);

    // Open popup with selected room
    const openPopup = (room: MeetingInterface) => {
        setSelectedRoom(room);
        setShowPopup(true);
    };

    // Close popup
    const closePopup = () => {
        setShowPopup(false);
        setSelectedRoom(null);
    };

    // Fetch meeting rooms on component mount
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
        <div className='pageMeetingStyle'>
            <div className="HeadTitleNew">
                <p>Details</p>
                <div className="booking">
                    <Link className='LinkToBooking'to='/Meeting_Room/booking'>
                        Booking
                    </Link>
                </div>
            </div>
            <div className="BodyData">
                <div className="MeetingRoomCard">
                    <div className="CowTitle NameCow">
                        <p>No.</p>
                        <p>Room Name</p>
                        <p>Details</p>
                        <p>Room Size</p>
                        <p>Capacity</p>
                        <p>Chair</p>
                        <p>Type</p>
                        <p>AirCondition</p>
                        <p>Add</p>
                    </div>
                </div>
                <div className="BodyDataRow">
                {rooms.map((room, index) => (
                    <div className="MeetingRoomCard" key={room.ID}>
                        <div className="RowData DataAll">
                            <p>{index + 1}</p>
                            <p>{room.RoomName}</p>
                            <p>{room.Detail}</p>
                            <p>{room.Capacity}</p>
                            <p>{room.RoomSize}</p>
                            <p>{room.AirCondition}</p>
                            <p>{room.Chair}</p>
                            <p>{room.Type}</p>
                            <div className="LinkToEdit" onClick={() => openPopup(room)}>Edit</div>
                        </div>
                    </div>
                ))}
                </div>
                
            </div>
            
            {showPopup && selectedRoom && (
                <div className='EditPOPUP'>
                    <div className='EditBox'>
                        <EditPopup room={selectedRoom} closePopup={closePopup} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Meeting_Room;
