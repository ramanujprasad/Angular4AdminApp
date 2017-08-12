import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { TranslateService } from '../services/translate.service';
import { TranslatePipe } from '../internationalization/translate.pipe';
import { TranslationProvider } from '../internationalization/translations';

describe('Component: EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent, TranslatePipe ],
      providers: [
            TranslateService,
            TranslationProvider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent (EmployeeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  xit('should create the app', () => {
    const translateService = fixture.debugElement.injector.get(TranslateService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(component).toBeTruthy();
  });
});
