import { Component, OnInit } from '@angular/core';
import { ListaFilmesService } from 'src/app/services/lista-filmes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ingresso-filmes',
  templateUrl: './ingresso-filmes.component.html',
  styleUrls: ['./ingresso-filmes.component.scss']
})
export class IngressoFilmesComponent implements OnInit {

  lista: ListaFilmesService;
  erro: any;
  regiaoSelecionadaParam: any;
  regiaoEstado: string;
  

  constructor(private ingressoService: ListaFilmesService,
    private route: ActivatedRoute) {

      this.route.queryParams.subscribe(params => {
        this.regiaoSelecionadaParam = params['regiaoSelecionadaParam'];
        console.log("regiaoSelecionadaParam constructor: " + this.regiaoSelecionadaParam)
      
        this.getListaFilmes();
        this.atualizaEstado();
      })
  }

  ngOnInit() {
    console.log("regiaoSelecionadaParam: " + this.regiaoSelecionadaParam)
    this.atualizaEstado();
    console.log("Estado: " + this.regiaoEstado);

  }

  atualizaEstado() {
    if (this.regiaoSelecionadaParam === '1') {
      this.regiaoEstado = 'de São Paulo';
      console.log(this.regiaoEstado);
    } else if (this.regiaoSelecionadaParam === '2') {
      this.regiaoEstado = 'do Rio de Janeiro';
      console.log(this.regiaoEstado);
    }
    this.getListaFilmes();
  }

  getListaFilmes() {
    if (this.regiaoSelecionadaParam === '1') {
      this.ingressoService.getListaFilmesSP().subscribe(
        (dados: ListaFilmesService) => {
          this.lista = dados;
          console.log(this.lista);
        },
        (error: any) => {
          this.erro = error;
          console.log(this.erro);
        });
    } else if (this.regiaoSelecionadaParam === '2') {
      this.ingressoService.getListaFilmesRJ().subscribe(
        (dados: ListaFilmesService) => {
          this.lista = dados;
          console.log(this.lista);
        },
        (error: any) => {
          this.erro = error;
          console.log(this.erro);
        });
    }

    console.log("getListaFilmes parametro final: " + this.regiaoSelecionadaParam)
    console.log("getListaFilmes lista" + this.lista);

  }

}
