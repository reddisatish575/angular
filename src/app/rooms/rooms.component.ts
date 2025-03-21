import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName : string = "Taj Hotel";
  numberOfRooms : number = 20;
  hideRooms : boolean = false;
  showRooms : string = "Show Rooms";
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.hideRooms=!this.hideRooms;
    this.showRooms = "Hide Rooms";
    if(!this.hideRooms) this.showRooms="Show Rooms";
  }

}
