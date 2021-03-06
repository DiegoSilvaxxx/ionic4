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
  
    path: 'logoff', 
    loadChildren: './logoff/logoff.module#LogoffPageModule',
    canActivate: [Auth2Guard]

  },
  { path: 'lista-de-clientes', 
    loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule',
    canActivate: [Auth2Guard]

  },
  { path: 'cadastro-de-cliente', loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' },
 
  { path: 'cliente-view', loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' },
  
  { path: 'mensagem', loadChildren: './mensagem/mensagem.module#MensagemPageModule' },
 
  { path: 'lista-de-mensagens', 
  loadChildren: './lista-de-mensagens/lista-de-mensagens.module#ListaDeMensagensPageModule' },
  
  { path: 'cadastro-de-mensagem', 
  loadChildren: './cadastro-de-mensagem/cadastro-de-mensagem.module#CadastroDeMensagemPageModule' },
  
  { path: 'atualiza-mensagem', 
  loadChildren: './atualiza-mensagem/atualiza-mensagem.module#AtualizaMensagemPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
