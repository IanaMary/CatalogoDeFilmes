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
    document.getElementById("acessibilidade").classList.toggle("alto-contraste");
  }

  altoContraste() {
    document.getElementById("acessibilidade").classList.toggle("alto-contraste");
    if(localStorage.getItem("alto") == "desativo") {
      localStorage.setItem("alto", "ativo");
    }
    else {
      localStorage.setItem("alto", "desativo");
    }
  }

  fonte (number: Number) {
    let tag = document.getElementsByTagName("body")[0];
    let fonteString = window.getComputedStyle(tag, null).getPropertyValue("font-size");
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

    localStorage.setItem("fonte", tag.style.fontSize);

  }
}