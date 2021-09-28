import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-test',
  template: ` 
   <h2>   welcome {{name}}</h2>
   <h2>   welcome {{"welcome"+name}}</h2>
   <h2>   welcome {{name.toUpperCase()}}</h2>
   <h2>   welcome {{name.length}}</h2>
   <h2>{{greetuser()}}</h2>
   <h2>{{siteurl}}</h2>
   <input type="text"  [id]="myid" value ="checking property bind">
   <input bind-disabled="isdisabled" id="{{myid}}" type="text"  value ="checking property bind">
   <h2 class="text-Success">This is my styles</h2>
   <h2 [class]="txt">This is my styles</h2>
   
  ` ,
  styles: [`
    .text-Success
    {
      color:green;
    }
    .text-danger
    {
      color:red;
    }
    .text-Special
    {
      color:yellow;
      font-style:italic;
    }

    
  `]
})
export class TestComponent implements OnInit {
public name="Mahesh";
public siteurl=window.location.href;
public myid="testid";
public isdisabled=true;
public txt ="text-danger";

  constructor() { }

  ngOnInit() {
  }
  greetuser()
  {
    return "hello "+this.name;
  }

}
