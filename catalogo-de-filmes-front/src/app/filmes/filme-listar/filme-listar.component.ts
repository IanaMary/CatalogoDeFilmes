import { Component } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';
import {TranslateService} from '@ngx-translate/core';
import { EventEmitterService } from 'src/app/idiomas/EventEmitterService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filme-listar',
  templateUrl: './filme-listar.component.html',
  styleUrls: ['./filme-listar.component.sass']
})

// FilmeListarComponent DO BACK DA API  

/*export class FilmeListarComponent {
  filmes: Filme[];
  totalPages: number;
  totalResults: number;
  pagina: number = 1;
  idiomaSelecionado: string;

  refreshEvento: any = null;


  constructor(
    private filmeService: FilmeService,
    public translate: TranslateService
  ) { }


  ngOnInit() {

    // ALTERA O VALOR DO IDIOMA SELECIONADO DEPENDENDO DO LOCAL STORAGE DO IDIOMA
    if(localStorage.getItem("idioma")) {
      this.idiomaSelecionado = localStorage.getItem("idioma");
    }else {
      this.idiomaSelecionado = "pt-BR";
    }
    
    // REFRESH NA PÁGINA DE LSITAR FILMES QUANDO O IDIOMA É ALTERADO 
    this.refreshEvento = EventEmitterService.get('refreshFilmes').subscribe(e => this.carregaFilmes());

  
    // INICIALIZANDO O  LISTAR FILME COMPONENT
    this.filmeService.sendGetPopularRequest(this.pagina).subscribe((data: any[]) => {
      this.filmes = data['results'];
      this.totalPages = data['total_pages'];
      this.totalResults = data['total_results'];
    })

  }

  carregaFilmes() {
    this.filmeService.sendGetPopularRequest(this.pagina).subscribe((data: any[]) => {
      this.filmes = data['results'];
    })
  }

  ngOnDestroy() {
    if (this.refreshEvento !== null) this.refreshEvento.unsubscribe();
  }

  // FUNÇÃO QUE É EXECUTADA TODA VEZ QUE HÁ TROCA DE PÁGINA 
  pageChanged(paginaAtual: number) {
    this.filmeService.sendGetPopularRequest(paginaAtual).subscribe((data: any[]) => {
      this.filmes = data['results'];
    })
  }

  // EXECUTADA PARA ATUALIZAR A PÁGINA DE LISTAR FILME DE ACORDO O NOME DO FILME PASSADO
  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    if (filterValue != "") {
      this.filmeService.sendSearchByName(filterValue).subscribe((data: any[]) => {
        this.filmes = data['results'];
      })
    } else {
      this.pageChanged(1);
    }
  }
}*/


// FilmeListarComponent DO BACK DA API  

export class FilmeListarComponent {
  filmes: Filme[];
  idiomaSelecionado: string;

  refreshEvento: any = null;


  constructor(
    private filmeService: FilmeService,
    public translate: TranslateService,
    private router: Router
  ) { }


  ngOnInit() {

    // ALTERA O VALOR DO IDIOMA SELECIONADO DEPENDENDO DO LOCAL STORAGE DO IDIOMA
    if(localStorage.getItem("idioma")) {
      this.idiomaSelecionado = localStorage.getItem("idioma");
    }else {
      this.idiomaSelecionado = "pt-BR";
    }
    
    // REFRESH NA PÁGINA DE LSITAR FILMES QUANDO O IDIOMA É ALTERADO 
    this.refreshEvento = EventEmitterService.get('refreshFilmes').subscribe(e => this.listarFilmes());

  
    // INICIALIZANDO O  LISTAR FILME COMPONENT
    this.listarFilmes();

  }

  listarFilmes() {
    this.filmeService.listarFilmes("").subscribe((data: any[]) => {
      console.log(data)
      this.filmes = data;
    })
  }


  deletarFilme(filmeId: string){
    this.filmeService.deletarFilme(filmeId)
      .subscribe(
        response => {
          console.log(response);
          EventEmitterService.get('refreshFilmes').emit(true);
        },
        error => {
          console.log(error);
        });
  }


  ngOnDestroy() {
    if (this.refreshEvento !== null) this.refreshEvento.unsubscribe();
  }

  // EXECUTADA PARA ATUALIZAR A PÁGINA DE LISTAR FILME DE ACORDO O NOME DO FILME PASSADO
  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    this.filmeService.listarFilmes(filterValue).subscribe((data: any[]) => {
        this.filmes = data;
    }) 
  }
}