import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iniciar-processo',
  templateUrl: './iniciar-processo.component.html',
  styleUrls: ['./iniciar-processo.component.css']
})
export class IniciarProcessoComponent implements OnInit {

  listaProcesso: string[] = [];

  filtro: string;

  constructor() { }

  ngOnInit() {
    this.listaProcesso = ['Processo 1', 'Processo 2', 'Processo 3', 'Processo 4' ]
  }

  onFilterGetList(){
    if(this.listaProcesso.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.listaProcesso;
    }

    return this.listaProcesso.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0){
        return true;
      }

      return false;
    });
  }

}
