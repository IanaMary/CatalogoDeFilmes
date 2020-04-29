import { Component, ModuleWithComponentFactories } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';
import * as moment from 'moment'; 
import { EventEmitterService } from 'src/app/idiomas/EventEmitterService';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.sass']
})

// FilmeDetalheComponent DO BACK DA API
/*export class FilmeDetalheComponent {
  filme: Filme;
  formato: string;
  refreshEvento: any = null;
  local: string = localStorage.getItem("idioma");
  

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeService
  ) { }

  ngOnInit() {

    // REFRESH NA PAÍGINA DE DETALHES QUANDO O IDIOMA É ALTERADO
    this.refreshEvento = EventEmitterService.get('refreshFilmes').subscribe(e => this.getFilme(this.route.snapshot.params['id']));

    // CAPTURA O ID QUE CHEGOU NA PÁGINA E CHAMA A FUNÇÃO GET_FILME
    this.getFilme(this.route.snapshot.params['id']);

  }

  ngOnDestroy() {
    if (this.refreshEvento !== null) this.refreshEvento.unsubscribe();
  }

  // ATUALIZA A PÁGINA DE DETALHES DO FILME DE ACORDO COM O ID CAPTURADO
  getFilme(id: string) {
    this.filmeService.sendFindByIdRequest(id).subscribe((data: Filme) => {  
      moment.locale(this.local); 
      data.release_date = moment(data.release_date).format('L');
      this.filme = data;
    });
  }
  
}*/

// FilmeDetalheComponent DO MEU BACK 
export class FilmeDetalheComponent {
  filme: Filme;
  formato: string;
  refreshEvento: any = null;
  local: string = localStorage.getItem("idioma");
  

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeService
  ) { }

  ngOnInit() {

    // REFRESH NA PAÍGINA DE DETALHES QUANDO O IDIOMA É ALTERADO
    this.refreshEvento = EventEmitterService.get('refreshFilmes').subscribe(e => this.getFilme(this.route.snapshot.params['id']));

    // CAPTURA O ID QUE CHEGOU NA PÁGINA E CHAMA A FUNÇÃO GET_FILME
    this.getFilme(this.route.snapshot.params['id']);

  }

  ngOnDestroy() {
    if (this.refreshEvento !== null) this.refreshEvento.unsubscribe();
  }

  // ATUALIZA A PÁGINA DE DETALHES DO FILME DE ACORDO COM O ID CAPTURADO
  getFilme(id: string) {
    this.filmeService.sendFindByIdRequestMeuBck(id).subscribe((data: Filme) => {  
      moment.locale(this.local); 
      data.release_date = moment(data.release_date).format('L');
      this.filme = data;
    });
  }
  
}

