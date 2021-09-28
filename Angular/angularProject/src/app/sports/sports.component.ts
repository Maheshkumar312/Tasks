import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SportService } from '../sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  
  sports = [] as any;
  sportsList = [] as any;
  sportsCheck : FormGroup;
  sportSelect = [];
  result = [];

  constructor(
    private sportsService :SportService ,
    private formBuilder: FormBuilder
  ) {
    this.sportsCheck = this.formBuilder.group({
      selectedSport: this.formBuilder.array([], [Validators.required])
    })
   }

  ngOnInit(): void {
    this.sports = this.sportsService.sportsList;
    this.sportsList = this.sportsService.sportsList;
  }

  onChange(e:any){
    const selectedSport: FormArray = this.sportsCheck.get('selectedSport') as FormArray;
 
    if (e.target.checked) {
      selectedSport.push(new FormControl(e.target.value));
      this.sportSelect.push(e.target.value as never);
    } else {
       const index = selectedSport.controls.findIndex(x => x.value === e.target.value);
       selectedSport.removeAt(index);
    }
  }

  onSubmit(){
    for(var i=0;i<this.sportSelect.length;i++){
      for(var j=0;j<this.sports.length;j++){
        if(this.sports[j].id == this.sportSelect[i]){
            this.result.push(this.sports[j] as never);
            console.log(this.result);
            
        }
      }
    }
    this.sports = this.result;
    this.sportsCheck.reset();
  }

  }