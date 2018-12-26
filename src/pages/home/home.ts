import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PesquisaCartaoAssPage } from '../pesquisa-cartao-ass/pesquisa-cartao-ass';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  abrirPesCartaoAss(){
    
    this.navCtrl.push(PesquisaCartaoAssPage)
  }

}
