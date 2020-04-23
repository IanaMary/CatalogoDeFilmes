import { Component, Output, EventEmitter } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Idioma } from 'src/app/idiomas/idioma';
import { IdiomaService } from 'src/app/idiomas/idioma.service';
import { Filme } from '../filme';
import {TranslateService} from '@ngx-translate/core';
import { EventEmitterService } from 'src/app/idiomas/EventEmitterService';


@Component({
  selector: 'app-filme-listar',
  templateUrl: './filme-listar.component.html',
  styleUrls: ['./filme-listar.component.sass']
})

export class FilmeListarComponent {
  filmes: Filme[];
  totalPages: number;
  totalResults: number;
  pagina: number = 1;
  displayedColumns: string[] = ['title', 'detalhes'];
  idiomaSelecionado: string;
  idiomas: Idioma[];

  refreshEvento: any = null;


  constructor(
    private filmeService: FilmeService,
    private idiomaService: IdiomaService,
    public translate: TranslateService
  ) { }


  ngOnInit() {

    if(localStorage.getItem("idioma")) {
      console.log("aaa");
      this.idiomaSelecionado = localStorage.getItem("idioma");
    }else {
      this.idiomaSelecionado = "pt-BR";
    }

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
}