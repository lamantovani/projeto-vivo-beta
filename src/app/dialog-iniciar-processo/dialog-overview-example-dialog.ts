import { DialogIniciarProcessoComponent } from './dialog-iniciar-processo.component';
import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'dialog-iniciar-processo.component',
  templateUrl: 'dialog-iniciar-processo.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  listaProcesso: string[] = [];

  filtro: string;

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
