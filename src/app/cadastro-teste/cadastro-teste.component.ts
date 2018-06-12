import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-teste',
  templateUrl: './cadastro-teste.component.html',
  styleUrls: ['./cadastro-teste.component.css']
})
export class CadastroTesteComponent implements OnInit {

  testes: string[] = []; 

  constructor() { }

  ngOnInit() {
    this.testes = ["teste 1", "teste 2"];
  }

 
}
