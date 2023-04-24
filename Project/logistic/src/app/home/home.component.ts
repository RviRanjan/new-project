import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
// import { Observable } from 'rxjs';
// import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flag: boolean = false
  flag2: boolean = false
  resData: any
  allDataSrc: any
  allDataDes: any
  price: any = []
  partnerName: any = []
  name: any = []
  source: any
  destination: any
  distance: any
  // filteredOptions!: Observable<string[]>;
  constructor(private authService: AuthService, private alertify: AlertifyService, private route: Router, private fb: FormBuilder) { }

  data = this.fb.group({
    src: ['', Validators.required],
    des: ['', Validators.required],
    km: [''],
    kg: ['', Validators.required]
  })

  ngOnInit(): void {
    this.authService.getAllDataSrc().subscribe((res: any) => {
      this.allDataSrc = res.data;
    })

    this.authService.getAllDataDes().subscribe((res: any) => {
      this.allDataDes = res.data;
    })

    // this.filteredOptions = this.data.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLocaleLowerCase();
  //   return this.allDataSrc.filter((option:any) => option.toLocaleLowerCase().indexOf(filterValue) === 0);
  // }
  onSubmit() {
    if (this.data.valid) {
      this.authService.getData(this.data.value.src, this.data.value.des).subscribe((res: any) => {
        if (res.status == 200) {
          this.source = this.data.value.src
          this.destination = this.data.value.des
          this.distance = this.data.value.km
          this.resData = res.data
          this.partnerName = this.resData[0].partner
          this.name = Object.keys(this.partnerName)
          console.log(res.x, res.y)
          if (this.data.value.km != 0 || this.data.value.km != '') {
            for (let i = 0; i < res.x.length; i++) {
              this.price[i] = Math.ceil(((res.x[i] * 0.01) * this.data.value.km) +
                ((res.y[i] * 0.01) * this.data.value.kg))
            }
            this.flag = true
          } else {
            this.flag = false
            this.flag2 = true
          }
        } else {
          this.flag = false
          this.flag2 = false
          alert("No service to this Route yet")
        }
      })
    } else {
      console.log("enter valid input")
    }

  }
}








