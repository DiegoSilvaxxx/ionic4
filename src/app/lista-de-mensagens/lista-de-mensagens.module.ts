import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeMensagensPage } from './lista-de-mensagens.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeMensagensPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeMensagensPage]
})
export class ListaDeMensagensPageModule {}
