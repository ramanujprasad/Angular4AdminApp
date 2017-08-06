/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TranslationProvider } from '../internationalization/translations';
import { TranslatePipe } from '../internationalization/translate.pipe';
import { TranslateService } from '../services/translate.service';

import { EmployeeComponent } from './employee.component';

describe('EmployeesInterface', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
   let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeComponent,
        TranslatePipe
      ],
      providers: [
        TranslateService,
        TranslationProvider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('employee'));
    passwordEl = fixture.debugElement.query(By.css('employee'));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
