import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogginIn : boolean = false;
  isAdmin : boolean = false;
  constructor() { }

  login(email : string, password :string){
    if(email=="admin@gmail.com" && password=="Admin"){
      this.isLogginIn = true
      this.isAdmin = true
    }
    else if(email=="admin@gmail.com" && password=="User"){
      this.isLogginIn = true
      this.isAdmin = false
    }
    return this.isLogginIn;
  }
}
