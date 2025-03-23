import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit , AfterContentInit, AfterContentChecked{

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    
    // console.log("uix container ngAfterContentInit employee ::: ",this.employee);
    this.employee.empName = "Nikola Tesla"
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // console.log("uix container ngAfterContentChecked called  ::: ");



  }

}
