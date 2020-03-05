import { filmes } from '../filmes';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface Filme {
  nome: string;
  lancamento: number;
  sinopse: string;
  direcao:string;
  autor: string;
  categorias: Array<string>;
  duracao: string;
}

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class ListarFilmesComponent implements OnInit{
  filmes = filmes;

  //displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  columnsToDisplay: string[] = ['nome', 'autor'];
  dataSource: MatTableDataSource<Filme>;
  expandedElement: Filme | null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(filmes);
    this.dataSource.filterPredicate = 
    (data: Filme, filter: string) => data.nome.toLowerCase().includes(filter) === true;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}