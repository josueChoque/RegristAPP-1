import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard) { }
  public user = {
    usuario: "",
    password: ""
  }
  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(()=>{
      let state = this.router.getCurrentNavigation()?.extras.state;
      if(state){
        this.user.usuario = state['user'].usuario;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    })
  }

}
