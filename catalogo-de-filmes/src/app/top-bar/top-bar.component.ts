import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    
  ) {
    var alto = document.getElementById("alto-contraste");
    alto.classList.toggle('alto-contraste');
  }

  ngOnInit(
   
  ) {}

  muda() {
    console.log("ddddddddddddd");
    var alto = document.getElementById("alto-contraste");
    alto.classList.toggle('alto-contraste');
  }
 

}