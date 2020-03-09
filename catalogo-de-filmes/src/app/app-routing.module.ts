import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeListarComponent } from './filmes/filme-listar/filme-listar.component';
import { FilmeDetalheComponent } from './filmes/filme-detalhe/filme-detalhe.component';

const routes: Routes = [
  {
    path: 'filmes',
    component: FilmeListarComponent,
    data: { title: 'Lista de Filmes' }
  },
  {
    path: 'detalhes-filme/:id',
    component: FilmeDetalheComponent,
    data: { title: 'Detalhes do Filme' }
  },
  { path: '',
    redirectTo: '/filmes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
