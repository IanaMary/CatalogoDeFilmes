import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeListarComponent } from './filme-listar/filme-listar.component';
import { FilmeDetalheComponent } from './filme-detalhe/filme-detalhe.component';

const filmesRoutes: Routes = [
  { path: 'filmes',  component: FilmeListarComponent, data: { animation: 'filmes' } },
  { path: 'filme/:id', component: FilmeDetalheComponent, data: { animation: 'filme' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(filmesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FilmesRoutingModule { }