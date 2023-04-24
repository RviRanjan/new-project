import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from 'src/services/adminService/admin.service';
import { AlertifyService } from 'src/services/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private adminService: AdminService, private route: Router,
    private alertify: AlertifyService) { }
  canActivate(): boolean {
    if (this.adminService.getAdminToken()) {
      return true
    } else {
      this.alertify.error("signin first")
      this.route.navigate(['/admin'])
      return false
    }
  }
}
