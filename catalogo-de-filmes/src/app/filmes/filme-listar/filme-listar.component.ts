import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FILMES } from '../mock-filmes';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme-listar',
  templateUrl: './filme-listar.component.html',
  styleUrls: ['./filme-listar.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class FilmeListarComponent {
  @Output() pageChange: EventEmitter<number>;
  filmes = FILMES;
  filmes$: Observable<Filme[]>;
  selectedId: number;
  totalPages: number;
  totalResults: number;
  page: number = 1;
  currentPage: number = 1;
  displayedColumns: string[] = ['title', 'detalhes'];
  dataSource: any;
  expandedElement: Filme | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private filmeService: FilmeService,
    private route: ActivatedRoute,
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