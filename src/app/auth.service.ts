import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { user } from './models/user';
import { userdetails } from './models/userdetails'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Input() users: user[] = [];
  newUser: user;
  usersd: userdetails[] = []
  
  logChecker = new Subject<any>()

  private logurl = "http://localhost:3000/userdetails"
  private loginurl = "http://localhost:3000/users"
  
  constructor(private http: HttpClient) { }

  reggUser(userdata){
    //register user, requires userdata: username, password, role
    let usern: string =   userdata.Username;
    let pass: string = userdata.Password;
    let Role: string = userdata.Role;
    let NewUser = {
      username: usern,
      password: pass,
      role: Role
    }
  // return this.http.get(`${this.logurl}/?username=${userdata.Username}`).subscribe(val =>{
  //   console.log(val[0])
  //   // if(val[0].hasOwnProperty('username')){
  //   if(val[0] == "undefined"){
  //     console.log("F")  
  //     return false
  //   }else{
  //     console.log("creating User")
  //     return true
  //   }
  // })

    
    return this.http.post(this.loginurl, NewUser)
  }

  newUserWork(userdata){
    //making userdetails for new user
    let workdet = {
      id: userdata.id,
      username: userdata.username,
      workdetails:[
    ]
    } 
    this.http.post(this.logurl, workdet).subscribe(res =>{console.log(res)})
  }

  loggedIn() {
    //checks if token is present in local storage
    return !!localStorage.getItem('token')
  }

  addtask(userdata){
    //adds task to db
    let uid = localStorage.getItem("id")
    console.log(uid)
    let da = new Date
    let today= da.getDate()+1;
    let mon = da.getMonth()
    let yea = da.getFullYear()
    let finalDate = new Date(yea, mon, today).toISOString().split("T")
    if (userdata.leave == true){
      userdata.taskname = "On Leave"
      userdata.duration = "leave"
    }
    let workdata = {
      taskname: userdata.taskname,
      taskcategory: userdata.taskCategory,
      won: userdata.won,
      duration: userdata.duration,
      // date: new Date(yea, mon, today),
      date: finalDate[0],
      leave: userdata.leave
    }
    let daaat = this.http.get(`${this.logurl}/${uid}`)
    let usedata: any;
    daaat.subscribe(val => {
      usedata = val
      usedata.workdetails.push(workdata)
      let uploaddata = {
        "workdetails": 
          usedata.workdetails
      }
      //calling patch
      let sentreq = this.http.patch(`${this.logurl}/${uid}`,uploaddata)
      sentreq.subscribe(val =>{
        return true
      })
      return true
    })
  }

  callapi(){
    //calls api
    return this.http.get(this.logurl)
  }

  loginuser(userdata){
  //sends get request to json server, requires userdata
  return this.http.get(`${this.loginurl}?username=${userdata.Username}&&password=${userdata.Password}`)
  }

  delUser(id){
  //deletes user of given id
  this.http.delete(`${this.logurl}/${id}`).subscribe(res=>{console.log("deleted")})
  return this.http.delete(`${this.loginurl}/${id}`)
  }

  leaveapply(userdata){
    //apply for leave
    console.log("callled",userdata)
    let uid = localStorage.getItem("id")
    if (userdata.leave == true){
      // userdata.taskname = "On Leave"
      userdata.duration = "leave"
    }
    let workdata =userdata
    let daaat = this.http.get(`${this.logurl}/${uid}`)
    let usedata: any;
    daaat.subscribe(val => {
      usedata = val
      usedata.workdetails.push(workdata)
      let uploaddata = {
        "workdetails": 
          usedata.workdetails
      }
      //calling patch
      let sentreq = this.http.patch(`${this.logurl}/${uid}`,uploaddata)
      sentreq.subscribe(val =>{
        return true
      })
      return true
    })
  }
}
