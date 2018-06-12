import { CadastroTesteComponent } from './cadastro-teste/cadastro-teste.component';
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IniciarProcessoComponent } from './iniciar-processo/iniciar-processo.component';

const appRoutes: Routes = [
     { path: 'home', component: HomeComponent},
     { path: 'cadastroTeste', component: CadastroTesteComponent},
     { path: 'iniciarProcesso', component: IniciarProcessoComponent}
    // { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}