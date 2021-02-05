import { Injectable, Input } from '@angular/core';
import { user } from './models/user';
import { HttpClient } from '@angular/common/http';

import { userdetails } from './models/userdetails'
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';



export const Anonymous_User: user = {
  username:undefined,
  password:'',
  role:''
}
export const thisisdata: object={
  "workdetails": []
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Input() users: user[] = [];
  newUser: user;
  usersd: userdetails[] = []
  
  private logurl = "http://localhost:3000/userdetails"
  private loginurl = "http://localhost:3000/users"
  
  constructor(private http: HttpClient) { }
  login(userdata){
    // let data = this.http.get(`${this.loginurl}?username=${userdata.Username}`)
    // data.subscribe(val =>{
    //   if (val[0].username === userdata.Username){
    //     if (val[0].passsword === userdata.password){
    //       console.log("Bye")
    //       return [Math.random(),val[0].username]
    //     }
    //   }else{
    //     let elem = document.getElementById("alert")
    //     elem.classList.remove("hidden")
    //     setTimeout(() =>{
    //     console.log("HEYYYY")
    //     elem.classList.add("hidden")
    //     }, 3000)
    //   }
    


    // })
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
        // alert("wrong username or password, Please Try Again")
        let elem = document.getElementById("alert")
        elem.classList.remove("hidden")
        setTimeout(() =>{
          
        elem.classList.add("hidden")
        }, 3000)
        
        
      }
    }
  }
  reggUser(userdata){
    let usern: string =   userdata.Username;
    let pass: string = userdata.Password;
    let Role: string = userdata.Role;
    let NewUser = {
      username: usern,
      password: pass,
      role: Role
    }
    let workdet:{
      id:number,
      username:string,
      workdetails:[{
        taskname: string,
        taskcategory: string,
        won: number,
        duration: number,
        date: Date,
        leave: boolean
      }]
    }
    return this.http.post(this.loginurl, NewUser)
  }
  //oldregmethod
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
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  //user details adding function below
  addtask(userdata){
    let username = localStorage.getItem('username')
    let uid = parseInt(localStorage.getItem("id"))
    let da = new Date
    let today= da.getDate()
    let mon = da.getMonth()
    let yea = da.getFullYear()
    let workdata = {
      taskname: userdata.taskname,
      taskcategory: userdata.taskCategory,
      won: userdata.won,
      duration: userdata.duration,
      date: new Date(yea, mon, today),
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

    //old method
    // if (this.usersd.length>1){
    //   for (let i=0; i<=this.usersd.length; i++){
    //     console.log("service called",this.usersd,i, this.usersd.length)

    //     console.log(this.usersd[i].username)
    //     if (this.usersd[i].username === username){
    //       console.log("user found")
    //       this.usersd[i]?.workdetails.push(workdata)
    //       console.log(this.usersd[i])
    //       return true
    //     }
    //   }
    // } else{
    //     console.log("adding new user")
    //     this.usersd.push(newuserdetal)
    //     console.log("data added",this.usersd)
    //   }
      ///pushin data in json server

  }

  callapi(){
    return this.http.get(this.logurl)
  }



loginuser(userdata){
  let res;
  let data = this.http.get(`${this.loginurl}?username=${userdata.Username}`)
  // return this.http.get(`http://localhost:3000/users/?username=${userdata.Userame}&&password=${userdata.Password}`)
  return data.subscribe(val =>{
    if(val[0].username === userdata.Username && val[0].password == userdata.Password){
      res = [Math.random(),val[0].username,val[0].role,val[0].id]
      localStorage.setItem('token', res[0])
      localStorage.setItem('username',res[1])
      localStorage.setItem('role', res[2])
      localStorage.setItem("id",res[3])
      return true
    }else{
      console.log("bb")
      let elem = document.getElementById("alert")
      elem.classList.remove("hidden")
      setTimeout(() =>{
      elem.classList.add("hidden")
      }, 3000)
      return false
    }
  })
}
}
