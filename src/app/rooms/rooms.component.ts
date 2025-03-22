import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit , DoCheck, AfterViewInit, AfterViewChecked{

  hotelName : string = "Taj Hotel";
  numberOfRooms : number = 20;
  hideRooms : boolean = true;
  showRooms : string = "Hide Rooms";
  rooms : Room={
    totalRooms :15,
    availableRooms:10,
    bookedRooms:5
  }

  roomsList : RoomsList[]=
    [
      {
        roomType: "Deluxe Room",
        roomNumber: 101,
        amenities: "AC, Wifi, Swimming Pool",
        price: 8000,
        photos: "https://source.unsplash.com/400x300/?hotel,deluxe",
        checkInTime: new Date('12-Nov-2021'),
        checkOutTime: new Date('12-Dec-2021')
      },
      {
        roomType: "Suite Room",
        roomNumber: 202,
        amenities: "AC, Wifi, Jacuzzi",
        price: 12000,
        photos: "https://source.unsplash.com/400x300/?hotel,suite",
        checkInTime: new Date('15-Jan-2022'),
        checkOutTime: new Date('15-Feb-2022')
      },
      {
        roomType: "Standard Room",
        roomNumber: 303,
        amenities: "Wifi, TV, Mini Bar",
        price: 5000,
        photos: "https://source.unsplash.com/400x300/?hotel,standard",
        checkInTime: new Date('01-Mar-2022'),
        checkOutTime: new Date('10-Mar-2022')
      },
      {
        roomType: "Executive Room",
        roomNumber: 404,
        amenities: "AC, Wifi, Breakfast",
        price: 10000,
        photos: "https://source.unsplash.com/400x300/?hotel,executive",
        checkInTime: new Date('20-Apr-2022'),
        checkOutTime: new Date('25-Apr-2022')
      },
      {
        roomType: "Family Room",
        roomNumber: 505,
        amenities: "AC, Wifi, Kids Play Area",
        price: 15000,
        photos: "https://source.unsplash.com/400x300/?hotel,family",
        checkInTime: new Date('05-May-2022'),
        checkOutTime: new Date('20-May-2022')
      },
      
  ]
  selectedRoom! : RoomsList;
  
  // @ViewChild(HeaderComponent) headerComp! : HeaderComponent ;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() { }
  ngOnInit(): void {

    // console.log("uix rooms ngOninit headerComp ::: ",this.headerComp);
  }

  ngDoCheck(): void {
    // console.log("uix rooms. DoCheck ::: ");
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.

  //   console.log("uix rooms SimpleChanges :: ",changes);
    
  // }

  ngAfterViewInit(): void {
    // console.log("uix rooms ngAfterViewInit headerComp ::: ",this.headerComp);
    // this.headerComp.headerTitle = "Welcome to Hotel"
    console.log("uix rooms ngafterviewinit headerChildrenComponent ::: ",this.headerChildrenComponent);

    this.headerChildrenComponent.first.headerTitle = "First HEader";
    this.headerChildrenComponent.forEach((cmp) => 
      cmp.headerTitle = "Titleeeee"
    )
    this.headerChildrenComponent.last.headerTitle = "Last HEader";

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log("uix rooms ngAfterViewChecked headerComp ::: ",this.headerComp);

  }
  toggle(){
    this.hideRooms=!this.hideRooms;
    this.showRooms = "Hide Rooms";
    if(!this.hideRooms) this.showRooms="Show Rooms";
  }
  fetchSelectedRoom(e:RoomsList){
      // console.log("uix e ::: ",e)
      this.selectedRoom = e;
  }
  addRoom(){
    const newRoom : RoomsList = {
      roomType: "Penthouse",
      roomNumber: 606,
      amenities: "AC, Wifi, Private Pool",
      price: 25000,
      photos: "https://source.unsplash.com/400x300/?hotel,penthouse",
      checkInTime: new Date('10-Jun-2022'),
      checkOutTime: new Date('30-Jun-2022')
    }

    // this.roomsList.push(newRoom);
    this.roomsList = [...this.roomsList,newRoom];
  }
}
