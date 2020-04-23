import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filmes/filme.service';
import { TranslateService } from '@ngx-translate/core';
import { EventEmitterService } from '../idiomas/EventEmitterService';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {
  altoConstrateAtivo: boolean = false;
  filmeService: any;
  filmes: any;
  constructor(
    public translate: TranslateService
  ) {
    translate.setDefaultLang('pt-BR');
    translate.use('pt-BR');
  }

  ngOnInit(

  ) {
    if(localStorage.getItem("alto") && localStorage.getItem("alto") == "true") {
      document.getElementById("acessibilidade").classList.toggle("alto-contraste");
      this.altoConstrateAtivo = true;
    }
      // ATULIZA/VERIFICA O LOCAL STORAGE DO IDIOMA
    if (localStorage.getItem("idioma")) {
        this.translate.use(localStorage.getItem("idioma"));
    }
    else {
      this.translate.use("pt-BR");
      localStorage.setItem("idioma", "pt-BR");
    }
  
  }

  altoContraste() {
    document.getElementById("acessibilidade").classList.toggle("alto-contraste");
    localStorage.setItem("alto", (!this.altoConstrateAtivo).toString());
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
  idioma(number: Number) {

    if(number == 1) {
      localStorage.setItem("idioma", "pt-BR");
      this.translate.use(localStorage.getItem("idioma"));
    }

    else if(number == 0) {
      localStorage.setItem("idioma", "en-US");
      this.translate.use(localStorage.getItem("idioma"));
    }

    else if(number == -1) {
      localStorage.setItem("idioma", "es-ES");
      this.translate.use(localStorage.getItem("idioma"));
    }
    EventEmitterService.get('refreshProdutos').emit(true);
  }
}