import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';

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

  roomsList : RoomsList[]=[];
  selectedRoom! : RoomsList;
  
  // @ViewChild(HeaderComponent) headerComp! : HeaderComponent ;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomsService : RoomsService) { }
  ngOnInit(): void {
    this.roomsList = this.roomsService.getRooms();
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
    // console.log("uix rooms ngafterviewinit headerChildrenComponent ::: ",this.headerChildrenComponent);

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

    this.roomsList.push(newRoom);
    // this.roomsList = [...this.roomsList,newRoom];
  }
}
