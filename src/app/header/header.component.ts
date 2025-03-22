import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Input() headerTitle : string = "";
  headerTitle : string = "...";
  constructor() { }

  ngOnInit(): void {
  }

}
