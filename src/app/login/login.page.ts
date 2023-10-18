import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutentificarService } from '../Servicios/autentificar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private auth: AutentificarService) { }
  redirectToRestablecer(){
    this.router.navigate(['restablecer'])
  }
  redirectToInicio(){
    this.router.navigate(['inicio'])
  }

  ngOnInit() {
  }

}
