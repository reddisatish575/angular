import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  title = 'hotelinventoryapp';
  roleType = "Admin";

  // --------------- case - I starts -----------------------

  // @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)

  //   componentRef.instance.numberOfRooms = 100
  // }
// --------------- case - I ends -----------------------

// --------------- case - II starts -----------------------
  // @ViewChild('name', {static:true}) name! : ElementRef;

  // ngOnInit(): void {
  //   console.log("uix app ngOnInit ::: ",this.name.nativeElement);
  //   this.name.nativeElement.innerText = "Hilton Hotel";
  // }
// --------------- case - II ends -----------------------

}
