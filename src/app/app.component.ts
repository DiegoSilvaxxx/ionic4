import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {

      title: 'Logoff',
      url: '/logoff',
      icon: 'logoff'
    },
    {
      title: 'Lista de Clientes',
      url: '/lista-de-clientes',
      icon: 'add-circle'
    },
    {
      title: 'Cadastro de Clientes',
      url: '/cadastro-de-cliente',
      icon: 'book'
    },
    {
      title: 'Lista de Mensagens',
      url: '/lista-de-mensagens',
      icon: 'book'
    },
    {
      title: 'Cadastro de Mensagem',
      url: '/cadastro-de-mensagem',
      icon: 'book'
    }
  ];
  //
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseauth: AngularFireAuth,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.firebaseauth.authState
      .subscribe(
        user => {
          if (user) {
            this.router.navigate(['/lista-de-clientes']);
          } else {
            this.router.navigate(['/home']);
          }
        },
        () => {
          this.router.navigate(['/lista-de-clientes']);
        }
      );
  }
}
