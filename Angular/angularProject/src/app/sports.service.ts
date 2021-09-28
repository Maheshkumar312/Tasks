
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor() { }
 
  sportsList = [
    {
      id:1,
      name : "Cricket",
      imagePath : "https://static.toiimg.com/thumb/msid-77565070,imgsize-75608,width-400,resizemode-4/77565070.jpg"
    },
    {
      id:2,
      name : "Football",
      imagePath :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_990hS0m-mdEySGG8zBNzFEU3GZmhizmCIQ&usqp=CAU"
    },
    {
      id:3,
      name : "Basketball",
      imagePath : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoCfxnvN3hMqmVdtVdzblYoUKQUc1JpOBOg&usqp=CAU"
    },
    {
      id:4,
      name : "Hockey",
      imagePath : "https://img.jagranjosh.com/images/2021/August/382021/mens_hockey_team_semifinal_clash.jpg"
    },
    {
      id:5,
      name : "Kabaddi",
      imagePath : "https://upload.wikimedia.org/wikipedia/commons/1/1f/Iran_men%27s_national_kabaddi_team_13970602000432636707284535394012_98208.jpg"
    },
   

  ]


}