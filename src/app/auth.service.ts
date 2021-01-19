import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { user } from './models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


export const Anonymous_User: user = {
  username:undefined,
  password:'',
  role:''
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private subject = new BehaviorSubject<user>(Anonymous_User)
  // user$: Observable<user> = this.subject.asObservable();
  // isLoggedin$: Observable<boolean> = this.user$.map(user => !!user.username)
  // isLoggedout$: Observable<boolean> = this.user$.map(isLoggedin$ => !isLoggedin$)
  users: user[] = [];
  newUser: user;
  // private _registrationURL = "http://localhost:3000/api/register"
  // private _loginURL = "http://localhost:3000/api/login"
  
  constructor(private http: HttpClient) { }
  login(userdata){
    console.log("hey "+ userdata)
    console.log(userdata.Username, this.users.length)

    for(let i=0; i<this.users.length ; i++){
      if(this.users[i].username===userdata.Username){
        
        if(this.users[i].password===userdata.Password){
        console.log("True");
          
          return [Math.random(),this.users[i].role]

      
        }
        else{
          alert("wrong username or password, Please Try Again")
        }
      }
      else{
        alert("wrong username or password, Please Try Again")
      }
    }
    // return this.http.post<any>(this._loginURL,{userdata})

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


    // return this.http.post<any>(this._registrationURL,{userdata})
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
