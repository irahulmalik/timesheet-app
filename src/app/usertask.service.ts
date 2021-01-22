import { Injectable } from '@angular/core';
import { userdetails } from './models/userdetails'

@Injectable({
  providedIn: 'root'
})
export class UsertaskService {
  
  usersd: userdetails[] = []

  constructor() { }
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
    
    for (let i=0; i<=this.usersd.length; i++){
      console.log("service called")
      if (this.usersd[i].username == username){
        this.usersd[i].workdetails.push(workdata)
        console.log(this.usersd)
        return true
      }

      
    }

  }
}
