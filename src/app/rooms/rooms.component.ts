import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit , DoCheck, AfterViewInit, AfterViewChecked, OnDestroy{

  hotelName : string = "Taj Hotel";
  numberOfRooms : number = 20;
  hideRooms : boolean = true;
  showRooms : string = "Hide Rooms";
  roomsss : Room={
    totalRooms :15,
    availableRooms:10,
    bookedRooms:5
  }

  roomsList : RoomsList[]=[];
  selectedRoom! : RoomsList;

  stream = new Observable<string>((observer) => {
    observer.next('user2');
    observer.next('user1');
    observer.next('user5');
    observer.complete();
    // observer.error('error')
  });
  
  // @ViewChild(HeaderComponent) headerComp! : HeaderComponent ;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  subs!: Subscription;
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      console.log("uix error ::: ",err);
      this.error$.next(err);
      return of([]);
    })
  );

  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )



  constructor(private roomsService : RoomsService) { }
  ngOnInit(): void {

    this.roomsService.getPhotos().subscribe((data) => {
      // console.log("uix data ::: ",data)
    })

  //   this.stream.subscribe({
  //     next : (value) => console.log("uix value ::: ",value),
  //     complete : () => console.log("uix complete"),
  //     error : (err) => console.log("uix error :: ",err),
  //   });

  //   this.stream.subscribe((data) => {
  //     console.log("uix rooms ngoninit data ::: ",data);
  //   // console.log("uix rooms ngoninit stream ::: ",this.stream);
  // });

    // this.subs = this.roomsService.getRooms$.subscribe((res) => {
    //   this.roomsList = res;
    // })

    // console.log("uix rooms ngOninit headerComp ::: ",this.headerComp);
  }
 
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  if(this.subs){
    this.subs.unsubscribe();
  }
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
    const newRoom : any = {
      roomType: "Penthouse",
      // roomNumber: '606',
      amenities: "AC, Wifi, Private Pool",
      price: 25000,
      photos: "https://source.unsplash.com/400x300/?hotel,penthouse",
      checkinTime: new Date('10-Jun-2022'),
      checkoutTime: new Date('30-Jun-2022'),
      rating : 4.3
    }

    this.roomsService.addRooms(newRoom).subscribe((data) => {
      this.roomsList.push(newRoom);
    })

    // this.roomsList = [...this.roomsList,newRoom];
  }

  editRoom(){
    const newRoom : any = {
      roomType: "PG",
      roomNumber: '3',
      amenities: "Nothing",
      price: 8000,
      photos: "https://source.unsplash.com/400x300/?hotel,penthouse",
      checkinTime: new Date('10-Jun-2022'),
      checkoutTime: new Date('30-Jun-2022'),
      rating : 4.3
    }

    this.roomsService.editRoom(newRoom).subscribe((data) => {
      this.roomsList = data
    })

  }
deleteRoom(){
    const newRoom : any = {
      roomType: "PG",
      roomNumber: '3',
      amenities: "Nothing",
      price: 8000,
      photos: "https://source.unsplash.com/400x300/?hotel,penthouse",
      checkinTime: new Date('10-Jun-2022'),
      checkoutTime: new Date('30-Jun-2022'),
      rating : 4.3
    }

    this.roomsService.deleteRoom(newRoom).subscribe((data) => {
      this.roomsList = data
    })

  }

}
