import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { EmployeesInterface } from '../interfaces/employees.interface';
import { employees } from '../mock-data/employees';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]

})
export class MyprofileComponent implements OnInit {

  employees: EmployeesInterface[] = [];
  menuState = 'out';

  constructor () {}

  ngOnInit () {
    this.employees = employees;
  }

  onEmployeeDelete(deletedEmployee) {
    this.employees = this.employees.filter (employee => employee !== deletedEmployee);
  }

  toggleMenu () {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
