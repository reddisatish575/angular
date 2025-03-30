import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      roomId: new FormControl({value : '2',disabled : true},{validators : [Validators.required]}),
      guestEmail: ['',[Validators.required, Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['', [Validators.required, Validators.minLength(5)]],
      address : this.fb.group({
        AddressLine1: ['',[Validators.required]],
        AddressLine2: [''],
        City: [''],
        State: [''],
        Country: [''],
        ZipCode: [''],
      }),
      guests : this.fb.array([this.addGuestControl()]),
      tnc : new FormControl(false, {validators : [Validators.requiredTrue]})
    });

  }

  addBooking(){
    console.log("uix booking form values ::: ",this.bookingForm.value);
    console.log("uix booking form raw value ::: ",this.bookingForm.getRawValue());
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address : {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      guests : '',
      tnc : ''

    });
  }

  addGuest(){
    this.appendGuest.push(
      this.addGuestControl()
    )
  }

  addGuestControl(){
    return this.fb.group({
      guestName : ['',[Validators.required]],
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
