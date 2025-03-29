import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './Token/localstorage.token';
import { sessionStorageToken } from './Token/sessionstorage.token';
import { windowToken } from './Token/window.token';
import { InitService } from './services/init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
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
            private initService : InitService,
            // private config : ConfigService,
            private router : Router,
      ){
          // console.log("uix initservice app ts :: ",initService.config);
        }

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log("uix event AppComponent ::: ",event);
    // })
    this.lst.setItem("name","Satish");
    this.sst.setItem("timeOut",40);
    // console.log("uix window :::",this.wt);

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log("uix Navigation Started ::: ");
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log("uix Navigation Ended ::: ");
    });

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
