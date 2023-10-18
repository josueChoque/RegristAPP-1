import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
  redirectToRestablecer(){
    this.router.navigate(['restablecer'])
  }
  redirectToInicio(){
    this.router.navigate(['inicio'])
  }

  ngOnInit() {
  }

}
