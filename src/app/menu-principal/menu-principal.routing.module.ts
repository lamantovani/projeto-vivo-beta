import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const menuRoutes = [
    // {path: 'menu', component: AlunosComponent, children: [
    //     {path: 'novo', component: AlunoFormComponent},
    //     {path: ':id', component: AlunoDetalheComponent},
    //     {path: ':id/editar', component: AlunoFormComponent}
    // ]}
    
];

@NgModule({
    imports: [RouterModule.forChild(menuRoutes)],
    exports: [RouterModule]
})
export class MenuPrincipalRoutingModule {}