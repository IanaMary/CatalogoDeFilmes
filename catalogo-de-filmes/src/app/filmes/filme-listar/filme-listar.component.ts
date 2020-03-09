import { MatTableDataSource } from '@angular/material/table';
import { Component, Output, EventEmitter } from '@angular/core';
import { FILMES } from '../mock-filmes';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme-listar',
  templateUrl: './filme-listar.component.html',
  styleUrls: ['./filme-listar.component.css']
})

export class FilmeListarComponent {
  @Output() pageChange: EventEmitter<number>;
  filmes = FILMES;
  totalPages: number;
  totalResults: number;
  page: number = 1;
  currentPage: number = 1;
  displayedColumns: string[] = ['title', 'detalhes'];
  dataSource: any;

  constructor(
    private filmeService: FilmeService
  ) { }


  ngOnInit() {
    this.filmeService.sendGetPopularRequest(this.page).subscribe((data: any[]) => {
      this.filmes = data['results'];
      this.totalPages = data['total_pages'];
      this.totalResults = data['total_results'];
      this.page = data['page'];
      this.dataSource = new MatTableDataSource(this.filmes);
    })
  }

  pageChanged(event) {
    this.filmeService.sendGetPopularRequest(event).subscribe((data: any[]) => {
      this.totalPages = data['total_pages'];
      this.totalResults = data['total_results'];
      this.filmes = data['results'];
      this.dataSource = new MatTableDataSource(this.filmes);
    })
  }

  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    if (filterValue != "") {
      this.filmeService.sendSearchByName(filterValue).subscribe((data: any[]) => {
        this.totalPages = data['total_pages'];
        this.totalResults = data['total_results'];
        this.filmes = data['results'];
        this.dataSource = new MatTableDataSource(this.filmes);
      })
    } else {
      this.pageChanged(1);
    }
  }

}