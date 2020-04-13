import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  

  constructor(
  ) {}

  ngOnInit(

  ) { 
    this.altoContraste(); }

  altoContraste() {
    document.getElementById("acessibilidade").classList.toggle('alto-contraste');
  }

  fonte (number: Number) {
    var tag = document.getElementsByTagName("body")[0];
    let fonteString = window.getComputedStyle(tag, null).getPropertyValue('font-size');
    let fontNumber = parseFloat(fonteString);
   
    //AUMENTAR A FONTE 
    if( (number == 1) && (fontNumber < 25)) {
      fontNumber++;
      tag.style.fontSize = fontNumber + "px";
    }

    //REDEFINIR A FONTE
    else if(number == 0) {
      tag.style.fontSize = "16px";
    }

     //DIMINUIR A FONTE 
     else if( (number == -1) && (fontNumber > 12)) {
      fontNumber--;
      tag.style.fontSize = fontNumber + "px";
    }
   
  }

}