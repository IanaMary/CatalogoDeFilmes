import { Component } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';
import {TranslateService} from '@ngx-translate/core';
import { EventEmitterService } from 'src/app/idiomas/EventEmitterService';


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
  displayedColumns: string[] = ['title', 'detalhes'];
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
  displayedColumns: string[] = ['title', 'detalhes'];
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
    this.filmeService.sendGetPopularRequestMeuBck().subscribe((data: any[]) => {
      this.filmes = data;
    })

  }

  carregaFilmes() {
    this.filmeService.sendGetPopularRequestMeuBck().subscribe((data: any[]) => {
      this.filmes = data;
    })
  }

  ngOnDestroy() {
    if (this.refreshEvento !== null) this.refreshEvento.unsubscribe();
  }

  // FUNÇÃO QUE É EXECUTADA TODA VEZ QUE HÁ TROCA DE PÁGINA 
  /*pageChanged(paginaAtual: number) {
    this.filmeService.sendGetPopularRequestMeuBck(paginaAtual).subscribe((data: any[]) => {
      this.filmes = data['results'];
    })
  }*/

  // EXECUTADA PARA ATUALIZAR A PÁGINA DE LISTAR FILME DE ACORDO O NOME DO FILME PASSADO
  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    this.filmeService.sendSearchByNamMeuBck(filterValue).subscribe((data: any[]) => {
        this.filmes = data;
    }) 
  }
}