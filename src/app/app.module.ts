import { DialogIniciarProcessoModule } from './dialog-iniciar-processo/dialog-inicar-processo-module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuPrincipalRoutingModule } from './menu-principal/menu-principal.routing.module';
import { MenuPrincipalModule } from './menu-principal/menu-principal.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home.routing.module';
import { AppRoutingModule } from './app.routing.module';
import { CadastroTesteComponent } from './cadastro-teste/cadastro-teste.component';
import { DialogIniciarProcessoComponent } from './dialog-iniciar-processo/dialog-iniciar-processo.component';
import { DialogOverviewExampleDialog } from './dialog-iniciar-processo/dialog-overview-example-dialog';
import { CommonModule } from '@angular/common';
import { IniciarProcessoComponent } from './iniciar-processo/iniciar-processo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    HomeComponent,
    CadastroTesteComponent,
    IniciarProcessoComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    MenuPrincipalRoutingModule,
    MenuPrincipalModule,
    HomeRoutingModule,
    AppRoutingModule,
    FormsModule,
    DialogIniciarProcessoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
