import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  username: string;
  password: string;

  constructor(public navCtrl: NavController) {

  }

  login() {
    console.log('username: '+ this.username);
    console.log('password: '+ this.password);
  }

}
