import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../app/services/authguard.guard';
import { LoginFormComponent } from '../app/login-form/login-form.component';
import { RegisterFormComponent } from '../app/register-form/register-form.component';
import { MyprofileComponent } from '../app/myprofile/myprofile.component';

export const appRoutes: Routes = [
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
];
