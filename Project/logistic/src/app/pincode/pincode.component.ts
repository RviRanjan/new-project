import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.css']
})
export class PincodeComponent implements OnInit {

  flag: boolean = false
  message!: string
  pincodePartner: any
  constructor(private authService: AuthService, private fb: FormBuilder) { }

  pincodeData = this.fb.group({
    pincode: ['736182', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.pincodeData.valid) {
      this.authService.getPincodeData({ pincode: this.pincodeData.value.pincode }).subscribe((res: any) => {
        if (res.status == 200) {
          this.flag = true
          this.pincodePartner = res.pincodeData.partner
          console.log(this.pincodePartner)
        } else {
          this.flag = false
          this.message = "No Service in this Area";
        }
      })
    }
  }
}
