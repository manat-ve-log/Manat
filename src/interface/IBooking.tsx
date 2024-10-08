export interface BookingInterface {
    DateTime:string;
    TotalPeople: number;
    DurationID?:number
    CustomerID?: number;  
    MeetingRoomID?: number;  

    Duration?: {
        StartTime?:string,
        EndtTime?:string,
    };

    Customer?: {
        First_Name: string;
        Last_Name: string;
        Tel: string;
        Email: string;
    };

    MeetingRoom?: {
        RoomName: string;
        Capacity: number;
        Detail: string;
        RoomSize: number;
        AirCondition: number;
        Chair: number;
        Type: string;
    };
}

