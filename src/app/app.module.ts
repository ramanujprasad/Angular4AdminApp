import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './services/authguard.guard';
import { UserService } from './services/user.service';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'myprofile',
    canActivate: [AuthguardGuard],
    component: MyprofileComponent
  }
]


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    LoginFormComponent,
    RegisterFormComponent, 
    FooterComponent, 
    MyprofileComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    AuthguardGuard
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
