import { Component, ModuleWithComponentFactories } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.sass']
})

export class FilmeDetalheComponent {
  filme: Filme;
  

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeService,
    
  ) {     
  }

  ngOnInit() {
   
    // CAPTURA O ID QUE CHEGOU NA PÁGINA E CHAMA A FUNÇÃO GET_FILME
    this.getFilme(this.route.snapshot.params['id']);
  }

  // ATUALIZA A PÁGINA DE DETALHES DO FILME DE ACORDO COM O ID CAPTURADO
  getFilme(id: string) {
    this.filmeService.sendFindByIdRequest(id).subscribe((data: Filme) => {  
      this.filme = data;
    });
  }
  
}

