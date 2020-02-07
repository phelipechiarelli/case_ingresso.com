import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionaRegiaoComponent } from './components/seleciona-regiao/seleciona-regiao.component';
import { IngressoFilmesComponent } from './components/ingresso-filmes/ingresso-filmes.component';

const routes: Routes = [
  { path: '', component: IngressoFilmesComponent },
  { path: 'listarfilmes', component: IngressoFilmesComponent },
  { path: 'selecionaRegiao', component: SelecionaRegiaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
