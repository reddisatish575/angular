import { Component, OnInit } from '@angular/core';
import { RoomsList } from '../rooms';
import { RoomsService } from 'src/app/services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  room : RoomsList = {
    roomType : '',
    amenities : '',
    checkinTime : new Date(),
    checkoutTime : new Date(),
    photos : '',
    price : 0,
    rating : 0
  }
  sucessMessage : string = '';
  constructor(private roomsService : RoomsService) { }

  ngOnInit(): void {
  }

  addRoom(roosForm : NgForm){
    this.roomsService.addRooms(this.room).subscribe((data) => {
      this.sucessMessage = "Room Add Successfully"
      console.log("uix data addRoom RoomsAddComponent ::: ",data);
      roosForm.reset();
    })
  }

}
