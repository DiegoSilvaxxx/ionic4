import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './service/auth2.guard';
import {CanActivate} from '@angular/router/src/utils/preactivation'



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [Auth2Guard]
  },
  { 
    path: 'logoff', 
    loadChildren: './logoff/logoff.module#LogoffPageModule',
    canActivate: [Auth2Guard]

  },
  { path: 'lista-de-clientes', 
    loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule',
    canActivate: [Auth2Guard]

  },
  { path: 'cadastro-de-cliente', loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
