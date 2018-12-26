import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PesquisaCartaoAssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisa-cartao-ass',
  templateUrl: 'pesquisa-cartao-ass.html',
})
export class PesquisaCartaoAssPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  voltar(){
    this.navCtrl.push(HomePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisaCartaoAssPage');
  }

}
