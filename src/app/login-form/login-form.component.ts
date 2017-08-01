import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../assets/styles/admin-form.scss']
})
export class LoginFormComponent {
  hasGlobalError = false;
  loginForm: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor (private route: ActivatedRoute,
    private router: Router,
    private user: UserService,
    formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  onFormSubmitted (value) {
    // This logic is just temporary solution which will be modified later
    const admin: any[] = JSON.parse(localStorage.getItem('admin')) || [];
    if (value['username'] === admin['username']  && value['password'] === admin['password']) {
      this.hasGlobalError = false;
      this.user.setUserLoggedIn();
      this.router.navigate(['myprofile']);
    } else {
      this.hasGlobalError = true;
    }
  }
}
