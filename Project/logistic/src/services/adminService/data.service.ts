import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataURL = "http://localhost:5000/addData";
  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post(this.dataURL, data);
  }
}
