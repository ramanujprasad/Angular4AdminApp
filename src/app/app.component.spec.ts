import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './services/authguard.guard';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeComponent } from './employee/employee.component';
import { TranslationProvider } from './internationalization/translations';
import { TranslatePipe } from './internationalization/translate.pipe';
import { TranslateService } from './services/translate.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        LoginFormComponent,
        FooterComponent,
        MyprofileComponent,
        SidebarComponent,
        EmployeeComponent,
        TranslatePipe
      ],
      imports : [
          RouterTestingModule,
          FormsModule,
          ReactiveFormsModule
      ],
      providers : [
        UserService,
        AuthguardGuard,
        TranslateService,
        TranslationProvider
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent (AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it(`should create the app`, async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should set the current language as 'English'`, () => {
    component.isCurrentLang('en');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.admin-dropdown__lang-default').textContent).toContain('English');
  });

  it(`should call the selectLang function as 'English'`, () => {
    component.selectLang('en');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.admin-dropdown__lang-default').textContent).toContain('English');
  });
});
