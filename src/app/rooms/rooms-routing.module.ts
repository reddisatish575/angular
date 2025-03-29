import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {
    path : 'rooms',
    component : RoomsComponent,
    children : [
      { path : 'add', component : RoomsAddComponent },
      { path : ':roomId', component : RoomsBookingComponent }]
   },
  // { path : 'rooms/add', component : RoomsAddComponent },
  // { path : 'rooms/:roomId', component : RoomsBookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
