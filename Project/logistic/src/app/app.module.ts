import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AlertifyService } from 'src/services/alertify.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthService } from 'src/services/auth.service';
import { AuthgaurdGuard } from '../AuthGaurd/authgaurd.guard';
import { TokenIntercepterService } from 'src/services/token-intercepter.service';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { MatTableModule } from '@angular/material/table';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PincodeComponent } from './pincode/pincode.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    NavComponent,
    LogoutPageComponent,
    ContactUsComponent,
    AdminLoginComponent,
    AdminPageComponent,
    PincodeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatAutocompleteModule
  ],
  providers: [
    AlertifyService,
    AuthService,
    AuthgaurdGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
