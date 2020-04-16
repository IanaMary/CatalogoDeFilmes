import { MatTableDataSource } from '@angular/material/table';
import { Component, Output, EventEmitter } from '@angular/core';
import { FILMES } from '../mock-filmes';
import { FilmeService } from '../filme.service';
import { Idioma } from 'src/app/idiomas/idioma';
import { IdiomaService } from 'src/app/idiomas/idioma.service';
import { Filme } from '../filme';

@Component({
  selector: 'app-filme-listar',
  templateUrl: './filme-listar.component.html',
  styleUrls: ['./filme-listar.component.css']
})

export class FilmeListarComponent {
  @Output() pageChange: EventEmitter<number>;
  filmes: Filme[];
  totalPages: number;
  totalResults: number;
  pagina: number = 1;
  displayedColumns: string[] = ['title', 'detalhes'];
  dataSource: any;
  idiomaSelecionado: string = "pt-BR";
  idiomas: any[];

  constructor(
    private filmeService: FilmeService,
    private idiomaService: IdiomaService
  ) { }


  ngOnInit() {

    if(localStorage.getItem("idioma")) {
      this.idiomaSelecionado = localStorage.getItem("idioma");
    }

    // INICIALIZANDO O  LISTAR FILME COMPONENT
    this.filmeService.sendGetPopularRequest(this.pagina, this.idiomaSelecionado).subscribe((data: any[]) => {
      this.filmes = data['results'];
      this.totalPages = data['total_pages'];
      this.totalResults = data['total_results'];
    }),

    this.idiomaService.sendGetIdioma().subscribe((data: any[]) => {
      this.idiomas = data;
    })


  }

  // FUNÇÃO QUE É EXECUTADA TODA VEZ QUE HÁ TROCA DE PÁGINA 
  pageChanged(paginaAtual: number) {
    this.filmeService.sendGetPopularRequest(paginaAtual,  this.idiomaSelecionado).subscribe((data: any[]) => {
      this.filmes = data['results'];
    })
  }

  onChange(idioma: string) {
    this.filmeService.sendGetPopularRequest(this.pagina, idioma).subscribe((data: any[]) => {
      this.filmes = data['results'];
      localStorage.setItem("idioma", idioma);
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