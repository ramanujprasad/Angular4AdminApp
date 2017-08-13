import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterFormComponent } from './register-form.component';
import { UserService } from '../services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '../services/translate.service';
import { TranslatePipe } from '../internationalization/translate.pipe';
import { TranslationProvider } from '../internationalization/translations';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          RegisterFormComponent,
          TranslatePipe
      ],
      imports : [
          RouterTestingModule,
          FormsModule,
          ReactiveFormsModule
      ],
      providers : [
            UserService,
            TranslateService,
            TranslationProvider
      ]
    })
    .compileComponents ();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent (RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // create reusable function for a dry spec.
  function updateForm(name, email, username, password) {
    component.registerForm.controls['name'].setValue(name);
    component.registerForm.controls['email'].setValue(email);
    component.registerForm.controls['username'].setValue(username);
    component.registerForm.controls['password'].setValue(password);
  }

  it(`should be created`, () => {
    expect(component).toBeTruthy();
  });

  it(`should be form invalid when empty`, () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it(`name, email, username and password field validity`, () => {
    let errors = {};
    const name = component.registerForm.controls['name'];
    const email = component.registerForm.controls['email'];
    const username = component.registerForm.controls['username'];
    const password = component.registerForm.controls['password'];
    errors = name.errors || email.errors || username.errors || password.errors || {};
    expect(errors['required']).toBeTruthy();
    expect(name.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();
    expect(username.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  it(`submitting the register form`, () => {
    expect(component.registerForm.valid).toBeFalsy();
    updateForm('Ramanuj', 'pd.ramanuj@gmail.com', 'admin', 'admin');
    fixture.detectChanges();
    const value = {
      name: 'Ramanuj',
      email: 'pd.ramanuj@gmail.com',
      username : 'admin',
      password: 'admin'
    };
    spyOn(component, 'onFormSubmitted').and.returnValue({});
    localStorage.setItem('admin', JSON.stringify(value));
    component.onFormSubmitted(value);
    expect(component.onFormSubmitted).toHaveBeenCalled();
  });
});
