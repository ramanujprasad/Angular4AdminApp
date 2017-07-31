import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit{
    model: any = {};
    registerForm: FormGroup;
    name = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.pattern('[a-z0-9.@]*')]);
    username = new FormControl('', [Validators.required, Validators.minLength(5)]);
    password = new FormControl('', [Validators.required]);
    constructor(private router:Router,private user:UserService, formBuilder: FormBuilder){
         this.registerForm = formBuilder.group({
            name: this.name,
            email : this.email,
            username: this.username,
            password: this.password
        });
    }

    ngOnInit(){       
    }

    onFormSubmitted(value){
        let admin: any[] = JSON.parse(localStorage.getItem('admin')) || [];        
        if (typeof(Storage) !== "undefined") {            
           localStorage.setItem('admin', JSON.stringify(value));
           this.router.navigate(['/']);
        }
    }
}