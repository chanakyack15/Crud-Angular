import { Component, OnInit } from '@angular/core';
import { StudentDetail } from 'src/app/shared/student-detail.model';
import { StudentDetailService } from 'src/app/shared/student-detail.service';

@Component({
  selector: 'app-student-detail-list',
  templateUrl: './student-detail-list.component.html',
  styleUrls: ['./student-detail-list.component.css']
})
export class StudentDetailListComponent implements OnInit {

  constructor(private service:StudentDetailService) { }

  ngOnInit() {
   this.service.refreshList();

  }
// updatingform(pd:StudentDetail){
// this.service.formData =pd;


}
