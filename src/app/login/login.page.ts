import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import {
  ReactiveFormsModule, FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  value = 'mumo';
  usuario = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
    ]),
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
  });

  constructor(private router: Router, private navCtrl: NavController) {}

  sendDetailsWithState() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.usuario.value.user },
    };
    this.router.navigate(['/home'], navigationExtras);
  }

  //Metodo para navegar desde un metodo llamado desde el html
  goToPagina2() {
    console.log('entramos al metodo');
    this.sendDetailsWithState();
    // this.navCtrl.navigateForward('/home');
  }

}
