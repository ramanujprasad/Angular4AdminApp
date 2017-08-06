import { TestBed, async, inject } from '@angular/core/testing';
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

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
