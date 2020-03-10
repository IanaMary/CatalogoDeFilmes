import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css']
})

export class FilmeDetalheComponent {
  filme: Filme;

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeService,
    
  ) { }

  ngOnInit() {
   
    // CAPTURA O ID QUE CHEGOU NA PÁGINA E CHAMA A FUNÇÃO GET_FILME
    this.getFilme(this.route.snapshot.params['id']);
  }

  // ATUALIZA A PÁGINA DE DETALHES DO FILME DE ACORDO COM O ID CAPTURADO
  getFilme(id: string) {
    this.filmeService.sendFindByIdRequest(id).subscribe((data: Filme) => { 
      data.release_date = this.formatadaData(data.release_date);
      this.filme = data;
    });
  }
  
  // FORMATA A DATA DE LANÇAMENTO NO FORMATO PT-BR
  formatadaData(data: string) {
    var arrayDtata  = data.split('-');
    return arrayDtata.reverse().join('/');
  }
  
}

