import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms';
import { emit } from 'process';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges,OnDestroy {

  @Input() rooms : RoomsList[] | null = [];
  @Output() selectedRoom = new EventEmitter<RoomsList>();
  @Input() title :string = "";
  constructor() { }

  ngOnInit(): void {
    // this.title = "rooms-list title ngon ";
    // console.log("uix ngoninit roomslist::::")
    this.call();

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // console.log("uix rooms-list ngOnDestroy called :::: ")
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.title = "rooms-list title";
    if (changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
    // console.log("uix rooms-list SimpleChanges ::: ",changes);
  }
  selectRoom(room: RoomsList){
    this.selectedRoom.emit(room)
  }
  call(){
    // console.log("uix call ::: ")
  }
}
