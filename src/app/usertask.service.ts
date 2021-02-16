import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userdetails } from './models/userdetails'

@Injectable({
  providedIn: 'root'
})
export class UsertaskService {
  api: string= 'http://localhost:3000/userdetails'
  usersd: userdetails[] = []

  constructor(private http: HttpClient) { }
  // addtask(userdata){
  //   let username = localStorage.getItem('username')
  //   let workdata = {
  //     taskName: userdata.taskname,
  //     taskCategory: userdata.taskCategory,
  //     won: userdata.won,
  //     duration: userdata.duration,
  //     date: new Date(2020, 11, 22),
  //     leave: userdata.leave
  //   }
    
  //   for (let i=0; i<=this.usersd.length; i++){
  //     console.log("service called")
  //     if (this.usersd[i].username == username){
  //       this.usersd[i].workdetails.push(workdata)

  //       return true
  //     }
  //   }
  // }
  getdata(){
   let currentUser = localStorage.getItem('username')
   return this.http.get(`${this.api}/?username=${currentUser}`)
  
  }
}
