import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogginIn : boolean = false;

  constructor() { }

  login(email : string, password :string){
    if(email=="admin@gmail.com" && password=="Admin"){
      this.isLogginIn = true
    }
    return this.isLogginIn;
  }
}
