export interface Booking{
    id: number;
    roomId: number;
    clientId:number;
    cost:number;
    checkIn: Date;
    checkOut:Date;
}

export interface BookingCreate{
    roomId: number;
    clientId:number;
    cost:number;
    checkIn: Date;
    checkOut:Date;
}