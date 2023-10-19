import { Component, OnInit,ElementRef ,ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutentificarService } from '../Servicios/autentificar.service';
import { IonModal, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonModal)modal!: IonModal;
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  passwordVisible: boolean = false;
  password: string = '';

  togglePasswordVisibility(){
    this.passwordVisible = !
    this.passwordVisible;
  }

  constructor(private router: Router, private auth: AutentificarService) { }
  public mensaje = ""
  public alertaButtons = ['OK'];
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
    this.auth.login(this.user.usuario, this.user.password).then(()=> {
      if (this.auth.autentificado){
        let navigationExtras: NavigationExtras ={
          state: { user: this.user}
        }
        this.router.navigate(['/inicio'], navigationExtras);
      } else {
        this.mensaje = "Ingresa tus Credenciales"
      }
    });
  }

  Consola(){
    console.log(this.user);
    if (this.user.usuario != "" && this.user.password != ""){
      this.mensaje = "";
    } else{
      this.mensaje = ""
    }
  }

  cancel(){
    this.modal.dismiss(null,'cancel');
  }
  confirm(){
    this.mensaje = " Registro Exitoso"
    this.auth.register(this.user.usuario, this.user.password);
    this.modal.dismiss(this.user.usuario, 'confirm');
  }

  ngOnInit() {
  }

}
