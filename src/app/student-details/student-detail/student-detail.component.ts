import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { StudentDetailService } from 'src/app/shared/student-detail.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private service:StudentDetailService,) { }

  ngOnInit() {
    this.resetForm();

  }
  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData ={
      SId : 0,
      SName :'',
      Phoneno:'',
      Class:''
    }
  }

  onSubmit(form:NgForm){
    this.service.postStudentDetail(form.value).subscribe(
      res =>{
        this.resetForm(form);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
