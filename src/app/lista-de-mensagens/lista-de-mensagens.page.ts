import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Mensagem} from '../model/mensagem';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lista-de-mensagens',
  templateUrl: './lista-de-mensagens.page.html',
  styleUrls: ['./lista-de-mensagens.page.scss'],
})
export class ListaDeMensagensPage implements OnInit {

  listaDeMensagens: Mensagem[] = [];
  firestore = firebase.firestore()
  settings = { timestampsInSnapshots: true };

  constructor(public router: Router,
    public loadingController: LoadingController) {

  }

  ngOnInit() {
    this.listaDeMensagens = [];
    this.getList();
  }

  viewMensagem(obj: Mensagem) {
    this.router.navigate(['/atualiza-mensagem', { 'mensagem': obj.id }]);


  }
  getList() {

    this.loading();

    var ref = firebase.firestore().collection("mensagem");
    ref.get().then(query => {
      query.forEach(doc => {
        let c = new Mensagem();
        c.setDados(doc.data());
        c.id = doc.id;
        this.listaDeMensagens.push(c);
      });

      this.loadingController.dismiss();
    });

  }

  remove(obj: Mensagem) {
    var ref = firebase.firestore().collection("mensagem");
    ref.doc(obj.id).delete()
      .then(() => {
        this.listaDeMensagens = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      });
  }
  async loading() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Carregando',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }


}
