import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthgaurdGuard } from '../AuthGaurd/authgaurd.guard';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PincodeComponent } from './pincode/pincode.component';
import { AdminGuard } from 'src/AuthGaurd/adminGaurd/admin.guard';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthgaurdGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'service-partner', component: PincodeComponent },
  { path: 'logout', component: LogoutPageComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'adminDashboard', component: AdminPageComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
