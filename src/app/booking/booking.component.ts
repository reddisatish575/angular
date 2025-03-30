import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm !: FormGroup;
  get appendGuest() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({value : '2',disabled : true}),
      guestEmail: new FormControl(''),
      checkinDate: new FormControl(''),
      checkoutDate: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl(''),
      bookingDate: new FormControl(''),
      mobileNumber: new FormControl(''),
      guestName: new FormControl(''),
      address : this.fb.group({
        AddressLine1: new FormControl(''),
        AddressLine2: new FormControl(''),
        City: new FormControl(''),
        State: new FormControl(''),
        Country: new FormControl(''),
        ZipCode: new FormControl(''),
      }),
      guests : this.fb.array([this.addGuestControl()])
    });
  }

  addBooking(){
    console.log("uix booking form values ::: ",this.bookingForm.value);
    console.log("uix booking form raw value ::: ",this.bookingForm.getRawValue());
  }

  addGuest(){
    this.appendGuest.push(
      this.addGuestControl()
    )
  }

  addGuestControl(){
    return this.fb.group({
      guestName : [''],
      age : new FormControl('')
    })
  }

  addPassport(){
      this.bookingForm.addControl('passport', new FormControl(''));
  }

  removePassport(){
    if(this.bookingForm.get('passport')){
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i : number){
      this.appendGuest.removeAt(i);
  }

}
