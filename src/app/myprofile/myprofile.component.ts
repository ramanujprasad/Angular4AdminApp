import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

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
  name: string; 
  designation: string;
  company: string;
	email: string;
  address: address;
  menuState:string = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor(private user: UserService) {
    this.name = 'Amit Agarwal'; 
    this.email="amitagrwal@test.com",
    this.designation = "Project Manager",
    this.company = "Microsoft",
    
		this.address = {
			street: '295 Groenhof',
			city: 'Amstelveen',
			state: 'NL'
		}
   }

  ngOnInit() {
  }

}

interface address {
	street: string;
	city: string;
	state:string;
}
