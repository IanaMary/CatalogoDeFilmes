import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';


@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css']
})

export class FilmeDetalheComponent implements OnInit {
  filme: Filme;
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeService,
    
  ) { }

  ngOnInit() {
    this.getFilme(this.route.snapshot.params['id']);
  }

  getFilme(id: string) {
    this.filmeService.sendFindByIdRequest(id).subscribe((data: Filme) => {
      this.filme = data;
      this.isLoadingResults = false;
    });
  }
}

