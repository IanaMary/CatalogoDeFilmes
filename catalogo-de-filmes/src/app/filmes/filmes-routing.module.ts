import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFilmesComponent } from '../listar-filmes/listar-filmes.component';
import { DetalhesFilmeComponent } from '../detalhes-filme/detalhes-filme.component';

const filmesRoutes: Routes = [
  { path: 'filmes',  component: ListarFilmesComponent, data: { animation: 'filmes' } },
  { path: 'filme/:id', component: DetalhesFilmeComponent, data: { animation: 'filme' } }
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