import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { DialogOverviewExampleDialog } from '../dialog-iniciar-processo/dialog-overview-example-dialog';


@Component({
  selector: 'menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent   {



  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

   someMethod() {
     this.trigger.openMenu();
   }

   animal: string;
   name: string;
 
   constructor(public dialog: MatDialog) {}
 
   openDialog(): void {
     let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
       width: '250px',
       data: { name: this.name, animal: this.animal }
     });
 
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
       this.animal = result;
     });
   }

}
