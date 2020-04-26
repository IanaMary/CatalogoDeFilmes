import { Component, OnInit } from '@angular/core';
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
    // ATULIZA/VERIFICA O LOCAL STORAGE DO ALTO CONSTRASTE 
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

  // FUNÇÃO QUE ATIVA/DESATIVA O ALTO CONTRASTE
  altoContraste() {
    document.getElementById("acessibilidade").classList.toggle("alto-contraste");
    localStorage.setItem("alto", (!this.altoConstrateAtivo).toString());
  }

  // FUNÇÃO QUE MUDA O TAMANHO DA FONTE
  fonte (number: Number) {
    let tag = document.getElementsByTagName("body")[0];
    let fonteString = window.getComputedStyle(tag, null).getPropertyValue("font-size");
    let fontNumber = parseFloat(fonteString);

    // AUMENTAR A FONTE 
    if( (number == 1) && (fontNumber < 25)) {
      fontNumber++;
      tag.style.fontSize = fontNumber + "px";
    }

    // REDEFINIR A FONTE
    else if(number == 0) {
      tag.style.fontSize = "16px";
    }

    // DIMINUIR A FONTE 
    else if( (number == -1) && (fontNumber > 12)) {
      fontNumber--;
      tag.style.fontSize = fontNumber + "px";
    }

    // ALTERA O VALOR DO LOCAL STORAGE DA FONTE COM O VALOR DA FONTE ESCOLHIDO 
    localStorage.setItem("fonte", tag.style.fontSize);
  }

  // FUNÇÃO QUE MUDA O IDIOMA
  idioma(number: Number) {

    // IDIOMA PT-BR
    if(number == 1) {
      localStorage.setItem("idioma", "pt-BR");
      this.translate.use(localStorage.getItem("idioma"));
    }

    // IDIOMA EN-US
    else if(number == 0) {
      localStorage.setItem("idioma", "en-US");
      this.translate.use(localStorage.getItem("idioma"));
    }

    // IDIOMA ES-ES
    else if(number == -1) {
      localStorage.setItem("idioma", "es-ES");
      this.translate.use(localStorage.getItem("idioma"));
    }

    // REFRESH NA PAGÍNA DE LISTAR FILMES QUANDO O IDIOMA É ALTERADO 
    EventEmitterService.get('refreshFilmes').emit(true);
  }
}