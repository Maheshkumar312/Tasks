import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  title = 'datatables';
  userForm:FormGroup;
  listData:any;
  dtOptions: DataTables.Settings = {};


  constructor(private fb:FormBuilder,private http: HttpClient  ){

      this.listData = [];

    this.userForm = this.fb.group({
      fname : ['', Validators.required],
      lname : ['', Validators.required],
      email : ['', Validators.required],
      ContactNo: ['', Validators.required],
      dob: ['', Validators.required]
    })
  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
 


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
  }
  this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.listData = this.listData
    });
   

}
}
