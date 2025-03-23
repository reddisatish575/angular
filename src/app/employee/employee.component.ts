import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers : [RoomsService]
})
export class EmployeeComponent implements OnInit {

  empName : string = "Albert";
  constructor(private roomsService : RoomsService) {
    // console.log("uix rooms service EmployeeComponent :::")
   }

  ngOnInit(): void {
  }

}
