import { Injectable } from '@angular/core';
import { StudentDetail } from './student-detail.model';
import { HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {
  formData:StudentDetail;
  readonly rootURL = "https://localhost:44302/api"
  list:StudentDetail[];
  constructor(private http:HttpClient) { }
  postStudentDetail(formData:StudentDetail){
   return this.http.post(this.rootURL + '/StudentDetail',formData)

  }
  refreshList(){
    this.http.get(this.rootURL + '/StudentDetail')
    .toPromise()
    .then(res => this.list = res as StudentDetail[]);
  }
}
