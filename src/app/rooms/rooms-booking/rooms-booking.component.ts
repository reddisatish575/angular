import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  globalParams : any;

    // ----------------- type - 4 using paramsMap--------------------------------
    id$ = this.router.paramMap.pipe( map((params) => params.get('roomId')));
    // ----------------- type - 4 ends  --------------------------------

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {

    // ----------------- type - 1 using param subscribtion --------------------------------

    // this.router.params.subscribe((params) => {
    //   console.log("uix params RoomsBookingComponent ::: ",params);
    //   this.globalParams = params;
    // })
    // ----------------- type - 1 ends --------------------------------

    // ----------------- type - 2 using snapshot params --------------------------------

    // let params = this.router.snapshot.params;
    // this.globalParams = params;

    // ----------------- type - 2 ends --------------------------------

    // ----------------- type - 3 using rx js map operator --------------------------------
    // id$ !: Observable<Number>;

      // this.id$ = this.router.params.pipe(
      //   map(params => params['roomId'])
      // );
    // ----------------- type - 3 ends  --------------------------------

    

  }

}
