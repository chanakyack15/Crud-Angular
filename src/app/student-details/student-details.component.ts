import { Component, OnInit } from '@angular/core';
import { StudentDetailService } from '../shared/student-detail.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
