import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userForm:FormGroup;
  listData:any;


  constructor(private fb:FormBuilder  ){

      this.listData = [];

    this.userForm = this.fb.group({
      name : ['', Validators.required],
      address : ['', Validators.required],
      ContactNo: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
 
}
