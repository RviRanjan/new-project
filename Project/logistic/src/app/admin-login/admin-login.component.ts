import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/services/alertify.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/services/adminService/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private adminService: AdminService, private alertify: AlertifyService,
    private route: Router) { }
  adminLogin = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.adminLogin.valid) {
      this.adminService.adminlogin({
        userName: this.adminLogin.value.userName,
        password: this.adminLogin.value.password
      }).subscribe((res: any) => {
        if (res.status == 200) {
          this.alertify.success('Signin Successful');
          this.route.navigate(['adminDashboard']);
          localStorage.setItem("adminToken", res.token)
          localStorage.setItem("adminUserName", res.adminData.userName)
        } else if (res.status == 401) {
          this.alertify.error("Please enter correct user name/password");
        }
      })
    } else {
      this.alertify.error("Enter required field");
    }
  }
}
