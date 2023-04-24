import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/adminService/admin.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(public _authService: AuthService, public adminService: AdminService) { }
  ngOnInit(): void {

  }

}
