import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../../helpers/must-match.validator';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser!: FormGroup
  constructor(private fb: FormBuilder, private route: Router,
    private alertify: AlertifyService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.createUser();
  }
  createUser() {
    this.newUser = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    //console.log(this.newUser.value);
    if (this.newUser.valid) {
      this.auth.registerationUser({
        userName: this.newUser.value.userName,
        email: this.newUser.value.email,
        fullName: this.newUser.value.fullName,
        password: this.newUser.value.password
      }).subscribe((res: any) => {
        //console.log(res);
        if (res.status == 200) {
          this.alertify.success('Resigtration Successful');
          this.route.navigate(['signin']);
        } else {
          this.alertify.error("Registration Failed");
        }
      })
    } else {
      this.alertify.error("Enter the required field");
    }
  }
}
