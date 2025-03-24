import { Inject, Injectable } from '@angular/core';
import { Room, RoomsList } from '../rooms/rooms';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  // roomsList : RoomsList[] = [];
  //  [
  //       {
  //         roomType: "Deluxe Room",
  //         roomNumber: 101,
  //         amenities: "AC, Wifi, Swimming Pool",
  //         price: 8000,
  //         photos: "https://source.unsplash.com/400x300/?hotel,deluxe",
  //         checkInTime: new Date('12-Nov-2021'),
  //         checkOutTime: new Date('12-Dec-2021'),
  //         rating : 4.5
  //       },
  //       {
  //         roomType: "Suite Room",
  //         roomNumber: 202,
  //         amenities: "AC, Wifi, Jacuzzi",
  //         price: 12000,
  //         photos: "https://source.unsplash.com/400x300/?hotel,suite",
  //         checkInTime: new Date('15-Jan-2022'),
  //         checkOutTime: new Date('15-Feb-2022'),
  //         rating : 4.4
  //       },
  //       {
  //         roomType: "Standard Room",
  //         roomNumber: 303,
  //         amenities: "Wifi, TV, Mini Bar",
  //         price: 5000,
  //         photos: "https://source.unsplash.com/400x300/?hotel,standard",
  //         checkInTime: new Date('01-Mar-2022'),
  //         checkOutTime: new Date('10-Mar-2022'),
  //         rating : 4.6
  //       },
  //       {
  //         roomType: "Executive Room",
  //         roomNumber: 404,
  //         amenities: "AC, Wifi, Breakfast",
  //         price: 10000,
  //         photos: "https://source.unsplash.com/400x300/?hotel,executive",
  //         checkInTime: new Date('20-Apr-2022'),
  //         checkOutTime: new Date('25-Apr-2022'),
  //         rating : 4.8
  //       },
  //       {
  //         roomType: "Family Room",
  //         roomNumber: 505,
  //         amenities: "AC, Wifi, Kids Play Area",
  //         price: 15000,
  //         photos: "https://source.unsplash.com/400x300/?hotel,family",
  //         checkInTime: new Date('05-May-2022'),
  //         checkOutTime: new Date('20-May-2022'),
  //         rating : 4.9
  //       },]
        
  getRooms$ = this.http.get<RoomsList []>('/api/rooms').pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config: any,
                private http : HttpClient) {
    // console.log("uix rooms service intialized :::")
   }

  getRooms() {
    // console.log("uix roomsservice getrooms config ::: ",this.config);
    // return this.roomsList;
    return this.http.get<RoomsList[]>('/api/rooms');
  }

  addRooms(room: RoomsList) {
    return this.http.post<RoomsList[]>('/api/rooms',room)
  }
  editRoom(room : RoomsList) {
    return this.http.put<RoomsList[]>(`/api/rooms/${room.roomNumber}`,room)
  }

  deleteRoom(room : RoomsList) {
    return this.http.delete<RoomsList[]>(`/api/rooms/${room.roomNumber}`)
  }

  getPhotos(){
    const req = new HttpRequest('GET',`https://jsonplaceholder.typicode.com/photos`,{reportProgress:true,});
    return this.http.request(req)
  }

}
