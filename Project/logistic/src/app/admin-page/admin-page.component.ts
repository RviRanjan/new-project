import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from 'src/services/alertify.service';
import { DataService } from 'src/services/adminService/data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private http: HttpClient, private dataService: DataService, private alertify: AlertifyService) { }
  newData = new FormGroup({
    src: new FormControl('', [Validators.required]),
    des: new FormControl('', [Validators.required]),
    partner: new FormGroup({
      partner1: new FormControl(''),
      partner2: new FormControl(''),
      partner3: new FormControl(''),
    })
  })

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.newData.valid) {
      this.dataService.postData(this.newData.value).subscribe((res: any) => {
        if (res.status == 200) {
          this.alertify.success("Data Inserted Sucessfull");
          this.newData.reset()
        } else {
          this.alertify.success("Data Inserted Failed");
        }
      })
    }
  }

}
