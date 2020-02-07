import { Component, OnInit, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-seleciona-regiao',
  templateUrl: './seleciona-regiao.component.html',
  styleUrls: ['./seleciona-regiao.component.scss']
})
export class SelecionaRegiaoComponent implements OnInit {

  regiaoSelecionada: string = null;
  codigoRegiao: string;

  constructor(private router: Router) { 
    this.router = router; 
  }

  ngOnInit() {
    this.regiaoSelecionada = '1';
    this.codigoRegiao = this.regiaoSelecionada;
    this.goFilmes(this.codigoRegiao);
  }

  goFilmes(regiao: string){
    this.regiaoSelecionada = null;
    console.log("regiao: " + regiao);
    this.regiaoSelecionada = regiao;    
    console.log("regiao selecionada: " + this.regiaoSelecionada);
    const regiaoSelecionadaParam = this.regiaoSelecionada;
    const nav: NavigationExtras = {
      queryParams: {
        'regiaoSelecionadaParam': regiaoSelecionadaParam
      }, 
      skipLocationChange: true
    };
      console.log('nav: ' + JSON.stringify(nav));
      this.router.navigate(['/listarfilmes'], nav); 


    }
  }








