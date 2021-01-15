import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { user } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: user[] = [];
  newUser: user;
  constructor() { }
  login(userdata){
    console.log("hey "+ userdata)
    console.log(userdata.Username, this.users.length)

    for(let i=0; i<this.users.length ; i++){
      if(this.users[i].username===userdata.Username){
        
        if(this.users[i].password===userdata.Password){
        console.log("True");
        }
        else{
          console.log("wrong username or password, Please Try Again");
        }
      }
      else{
        console.log("wrong username or password, Please Try Again");
      }
    }
  }
  registerUser(userdata){
    let usern: string =   userdata.Username;
    let pass: string = userdata.Password;
    let Role: string = userdata.Role;
     
    this.newUser = {username: usern,
      password: pass,
      role: Role
    } ;
    this.users.push(this.newUser);
  }
}
