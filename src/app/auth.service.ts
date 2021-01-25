import { Injectable, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { user } from './models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { userdetails } from './models/userdetails'

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
  @Input() users: user[] = [];
  newUser: user;
  usersd: userdetails[] = []
  // private _registrationURL = "http://localhost:3000/api/register"
  // private _loginURL = "http://localhost:3000/api/login"
  private logurl = "http://localhost:3000/userdetails"
  
  constructor(private http: HttpClient) { }
  login(userdata){
    console.log(this.users)
    
    for(let i=0; i<this.users.length ; i++){
      if(this.users[i].username===userdata.Username){
        if(this.users[i].password===userdata.Password){
          return [Math.random(),this.users[i].role]
        }
        else{
        }
      }
      else{
      }
      if(i+1 == this.users.length){
        alert("wrong username or password, Please Try Again")
      }
    }
    // return this.http.post<any>(this._loginURL,{userdata})
  }
  registerUser(userdata){
    let usern: string =   userdata.Username;
    let pass: string = userdata.Password;
    let Role: string = userdata.Role;
    console.log(this.users)
    this.newUser = {username: usern,
      password: pass,
      role: Role
    } ;
    this.users.push(this.newUser);
    for(let i=0; i<this.users.length ; i++){
      if(this.users[i].username===userdata.Username){
          return false
      } else{       
        return true
      }
    }
    // return this.http.post<any>(this._registrationURL,{userdata})
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  //user details adding function below
  addtask(userdata){
    let username = localStorage.getItem('username')
    let workdata = {
      taskName: userdata.taskname,
      taskCategory: userdata.taskCategory,
      won: userdata.won,
      duration: userdata.duration,
      date: new Date(2020, 11, 22),
      leave: userdata.leave
    }
    let newuserdetal = {
      username: localStorage.getItem("username"),
      workdetails: [workdata]
    }
    if (this.usersd.length>1){
      for (let i=0; i<=this.usersd.length; i++){
        console.log("service called",this.usersd,i, this.usersd.length)

        console.log(this.usersd[i].username)
        if (this.usersd[i].username === username){
          console.log("user found")
          this.usersd[i]?.workdetails.push(workdata)
          console.log(this.usersd[i])
          return true
        }
      }
    } else{
        console.log("adding new user")
        this.usersd.push(newuserdetal)
        console.log("data added",this.usersd)
      }
  }
}
