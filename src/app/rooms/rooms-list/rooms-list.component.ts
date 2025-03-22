import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms';
import { emit } from 'process';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms : RoomsList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomsList>();
  @Input() title :string = "";
  constructor() { }

  ngOnInit(): void {
    // this.title = "rooms-list title ngon ";
    // console.log("uix ngoninit roomslist::::")

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
}
