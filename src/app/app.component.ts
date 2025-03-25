import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './Token/localstorage.token';
import { sessionStorageToken } from './Token/sessionstorage.token';
import { windowToken } from './Token/window.token';
import { InitService } from './services/init.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'hotelinventoryapp';
  roleType = "Admin";

constructor(@Inject(localStorageToken) private lst : any,
            @Inject(sessionStorageToken) private sst: any,
          @Inject(windowToken) private wt : any,
        private initService : InitService ){
          console.log("uix initservice app ts :: ",initService.config);
        }

  ngOnInit(): void {
    this.lst.setItem("name","Satish");
    this.sst.setItem("timeOut",40);
    // console.log("uix window :::",this.wt);
  }


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
