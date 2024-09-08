// import { UsersInterface } from "../../interfaces/IUser";
import { MeetingInterface } from "../../interface/IMeetingRoom"


const apiUrl = "http://localhost:8000";

async function GetMeetingRooms() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/meetingRoom`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// async function GetGenders() {
//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   let res = await fetch(`${apiUrl}/genders`, requestOptions)
//     .then((res) => {
//       if (res.status == 200) {
//         return res.json();
//       } else {
//         return false;
//       }
//     });

//   return res;
// }

async function DeleteMeetingRoomByID(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE"
  };

  let res = await fetch(`${apiUrl}/meetingRooms/${id}`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return true;
      } else {
        return false;
      }
    });

  return res;
}

async function GetMeetingRoomById(id: Number | undefined) {
  const requestOptions = {
    method: "GET"
  };

  let res = await fetch(`${apiUrl}/meetingRooms/${id}`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}


async function CreateMeetingRoom(data: MeetingInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/meetingRooms`, requestOptions)
    .then((res) => {
      if (res.status == 201) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

async function UpdateMeetingRoom(data: MeetingInterface) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/meetingRooms`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

export {
  GetMeetingRooms,
  GetMeetingRoomById,
  DeleteMeetingRoomByID,
  UpdateMeetingRoom,
  CreateMeetingRoom,
};