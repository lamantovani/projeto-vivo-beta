import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaTarefa: string[] = [
    'Minfnhas Tarefas',
    'ALL_TASKS',
    'interflow-telecommunications-processing-vivo-analisys-priority',
    'Analistas - Prioridade',
    'interflow-health-accounts-portoseguro-recepcao',
    'Recepção',
    'Recepção - Marsh',
    'Avaliadores - Xp Investimentos',
    'Analistas - Vivo',
    'interflow-telecommunications-processing-vivo-analisys',
    'interflow-health-reimbursement-marsh-recepcao'
  ];



  viewDataAcopanhamento: boolean = false;
  viewDataPrevisao: boolean = false;

  dataAcompanhamento: Date;
  dataPrevisao: Date;

  constructor() { }

  ngOnInit() {

    if(this.dataAcompanhamento != null){
      this.viewDataAcopanhamento = true;
    } else {
      this.viewDataAcopanhamento = false;
    }

    if(this.dataPrevisao != null){
      this.viewDataPrevisao = true;
    } else {
      this.viewDataPrevisao = true;
    }

  }

  onDefinirDataCaompanhaMento(){
    this.viewDataAcopanhamento = !this.viewDataAcopanhamento;
  }

  onDefinirDataPrevisao(){
    this.viewDataPrevisao = !this.viewDataPrevisao;
  }



}
