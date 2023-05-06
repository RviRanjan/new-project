import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
 form: FormGroup;


 constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      msg: ['', Validators.required]
    });
  }

 onSubmit() {
    const formData = this.form.value;
    console.log(formData)
    this.auth.sendemail({ formData}).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  ngOnInit(): void {
  }

}
