import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name="ali"                       //interpolation
                                   
  status=false                     //interpolation
  
  add(){                           //event binding
    console.log('salut 4arctic8')
  }
}
