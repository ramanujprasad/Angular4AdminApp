import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { TranslateService } from '../services/translate.service';
import { TranslatePipe } from '../internationalization/translate.pipe';
import { TranslationProvider } from '../internationalization/translations';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent, TranslatePipe ],
      providers: [ TranslateService, TranslationProvider ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent (EmployeeComponent);
    component = fixture.debugElement.componentInstance;
      component.employee = {
        id: '1',
        userimg: '../../assets/images/user_placeholder.png',
        name: 'Amit Agrawal',
        designation: 'IT Analyst',
        company: 'TCS',
        email: 'amit@test.com',
        phone: '+31-12345678',
        status: 'Active'
    };
    fixture.detectChanges();
  });

  it(`should create the app`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(component).toBeTruthy();
  });

  it(`should change the status of the employee to 'Active'`, () => {
    component.isReported = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.employee__status').textContent).toContain('Active');
  });

  it(`should change the status of the employee to 'Inactive'`, () => {
    component.isReported = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.employee__status').textContent).toContain('Inactive');
  });
});
