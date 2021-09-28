import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics=['angular','react','nodejs'];
  userModel=new User('','', 6785678987,'','morning',true);
}
