import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  email: string = '';

  constructor(private toastController: ToastController,private router: Router) { }
  async resetPassword(){
    const toast = await this.toastController.create({
      message: 'Se ha enviado un correo electrónico de recuperación de contraseña.',
      duration: 7000,
    });
    toast.present();
  }
  redirectToLogin(){
    this.router.navigate(['login'])
  }

  ngOnInit() {
  }

}
