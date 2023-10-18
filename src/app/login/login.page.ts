import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutentificarService } from '../Servicios/autentificar.service';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonModal)modal!: IonModal;

  constructor(private router: Router, private auth: AutentificarService) { }
  redirectToRestablecer(){
    this.router.navigate(['restablecer'])
  }
  redirectToInicio(){
    this.router.navigate(['inicio'])
  }
  user = {
    usuario: "",
    password: ""
  }

  informacionUsuario(){
    this.auth
  }

  ngOnInit() {
  }

}
