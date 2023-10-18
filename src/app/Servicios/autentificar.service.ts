import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface User{
  user: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AutentificarService {
  

  constructor() { }
}
