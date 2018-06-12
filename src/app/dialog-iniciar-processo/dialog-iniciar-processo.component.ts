import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';

@Component({
  selector: 'dialog-iniciar-processo',
  templateUrl: './dialog-iniciar-processo.component.html',
  styleUrls: ['./dialog-iniciar-processo.component.css']
})
export class DialogIniciarProcessoComponent implements OnInit {


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
   
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
