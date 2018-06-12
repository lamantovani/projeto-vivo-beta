import { CdkTableModule } from '@angular/cdk/table';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';
import { DialogIniciarProcessoComponent } from './dialog-iniciar-processo.component';
import { NgModule, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';
import { CompileNgModuleMetadata, CompileMetadataResolver, JitCompiler } from '@angular/compiler';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { AnimationFactory } from '@angular/animations';
import { MatNativeDateModule } from '@angular/material';

@NgModule({

    declarations: [
        DialogIniciarProcessoComponent,
        DialogOverviewExampleDialog
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MenuPrincipalModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    exports: [DialogIniciarProcessoComponent, DialogOverviewExampleDialog],
    entryComponents: [DialogIniciarProcessoComponent, DialogOverviewExampleDialog],
    bootstrap: [DialogIniciarProcessoComponent]

})
export class DialogIniciarProcessoModule { }