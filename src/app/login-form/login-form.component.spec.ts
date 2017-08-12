import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormComponent } from './login-form.component';
import { UserService } from '../services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
