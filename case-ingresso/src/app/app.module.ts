import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngressoFilmesComponent } from './components/ingresso-filmes/ingresso-filmes.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SelecionaRegiaoComponent } from './components/seleciona-regiao/seleciona-regiao.component';
import { PrincipalComponent } from './components/principal/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    IngressoFilmesComponent,
    SelecionaRegiaoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
