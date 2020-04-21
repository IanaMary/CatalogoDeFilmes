import { Component, Output, EventEmitter } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Idioma } from 'src/app/idiomas/idioma';
import { IdiomaService } from 'src/app/idiomas/idioma.service';
import { Filme } from '../filme';

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

  constructor(
    private filmeService: FilmeService,
    private idiomaService: IdiomaService
  ) { }


  ngOnInit() {

    // ATULIZA/VERIFICA O LOCAL STORAGE DO IDIOMA
    if (localStorage.getItem("idioma")) {
      this.idiomaSelecionado = localStorage.getItem("idioma");
    } else {
      this.idiomaSelecionado = "pt-BR";
      localStorage.setItem("idioma", this.idiomaSelecionado);
    }

    // INICIALIZANDO O  LISTAR FILME COMPONENT
    this.filmeService.sendGetPopularRequest(this.pagina, this.idiomaSelecionado).subscribe((data: any[]) => {
      this.filmes = data['results'];
      this.totalPages = data['total_pages'];
      this.totalResults = data['total_results'];
    }),

    // INICIALIZANDO O  LISTA DE IDIOMAS
    this.idiomaService.sendGetIdioma().subscribe((data: any[]) => {
      this.idiomas = data;
    })

  }

  // FUNÇÃO QUE É EXECUTADA TODA VEZ QUE HÁ TROCA DE PÁGINA 
  pageChanged(paginaAtual: number) {
    this.filmeService.sendGetPopularRequest(paginaAtual, this.idiomaSelecionado).subscribe((data: any[]) => {
      this.filmes = data['results'];
    })
  }

  // FUNÇÃO QUE É EXECUTADA TODA VEZ QUE HÁ TROCA DE IDIOMA
  onChange(idioma: string) {
    this.filmeService.sendGetPopularRequest(this.pagina, idioma).subscribe((data: any[]) => {
      this.filmes = data['results'];
      localStorage.setItem("idioma", idioma);
      this.idiomaSelecionado = idioma;
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