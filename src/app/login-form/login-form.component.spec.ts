import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser/src/dom/debug/by';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormComponent } from './login-form.component';
import { UserService } from '../services/user.service';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { TranslateService } from '../services/translate.service';
import { TranslatePipe } from '../internationalization/translate.pipe';
import { TranslationProvider } from '../internationalization/translations';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginFormComponent,
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
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // create reusable function for a dry spec.
  function updateForm(username, password) {
    component.loginForm.controls['username'].setValue(username);
    component.loginForm.controls['password'].setValue(password);
  }

  it(`should be created`, () => {
    expect(component).toBeTruthy();
  });

  it(`should be form invalid when empty`, () => {
  expect(component.loginForm.valid).toBeFalsy();
  });

  it(`username and password field validity`, () => {
    let errors = {};
    const username = component.loginForm.controls['username'];
    const password = component.loginForm.controls['password'];
    errors = username.errors || password.errors || {};
    expect(errors['required']).toBeTruthy();
    expect(username.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  it(`submitting the login form`, () => {
    expect(component.loginForm.valid).toBeFalsy();
    updateForm('admin', 'admin');
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeTruthy();
    const value = {
      username : 'admin',
      password: 'admin'
    };
    localStorage.setItem('admin', JSON.stringify(value));
    spyOn(component, 'onFormSubmitted').and.returnValue({});
    component.onFormSubmitted(value);
    expect(component.onFormSubmitted).toHaveBeenCalled();
  });
});
