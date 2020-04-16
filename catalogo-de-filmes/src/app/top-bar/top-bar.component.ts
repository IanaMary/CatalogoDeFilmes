import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  altoConstrateAtivo: boolean = false;
  constructor(
  ) {}

  ngOnInit(

  ) {
    document.getElementById("acessibilidade").classList.toggle("alto-contraste");
    console.log(this.altoConstrateAtivo);
    if(localStorage.getItem("alto") == "true") {
      this.altoConstrateAtivo = true;
      localStorage.setItem("alto", "true");
    }
    else {
      this.altoConstrateAtivo = false;
      localStorage.setItem("alto", "false");
    }
  }

  altoContraste() {
    document.getElementById("acessibilidade").classList.toggle("alto-contraste");
    this.altoConstrateAtivo = !this.altoConstrateAtivo;
    localStorage.setItem("alto", this.altoConstrateAtivo.toString());
    console.log(localStorage.getItem("alto"));
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