import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  

  constructor() { }

  ngOnInit(){
    
  }
  registerUser(form: NgForm) {
    console.log(form.value);

}

}

