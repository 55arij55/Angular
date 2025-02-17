import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  name2="ali2"                       //interpolation
                                   
  status=false                     //interpolation
  
  add(){                           //event binding
    console.log('salut 4arctic8')
  }
  search="hello"
}
