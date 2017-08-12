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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

