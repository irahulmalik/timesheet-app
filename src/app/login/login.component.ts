import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  name: string;
  password: string;
  hide = true;
  constructor(private auth:AuthService,
    private router: Router){
      if (auth.loggedIn()){
        router.navigate(['/addtask'])
      }
    }

  ngOnInit(){
    
    // this.onRegister();

  }

onSubmit(form: NgForm){
  // if(!!this.auth.loginuser(form.value)){
  //   setTimeout(() =>{
  //     this.router.navigate(['/addtask'])
  //   }, 20)
    
  // }
  this.auth.loginuser(form.value).subscribe(res => {
    if (res[0] ){
      res = [Math.random(),res[0].username,res[0].role,res[0].id]
      localStorage.setItem('token', res[0])
      localStorage.setItem('username',res[1])
      localStorage.setItem('role', res[2])
      localStorage.setItem("id",res[3])
      this.router.navigate(['/addtask'])
    }else{
      console.log("user not Found")
    }
  })
}

// showPassword(){
//   let elem = <InnerHTML>document.getElementsByName("password")
//   if (elem.)
// }
// onRegister(){
//   const user={
//     Username: "Rahul",
//     Password: "Malik",
//     Role: "Manager"
//   };
//   this.auth.registerUser(user);
// }
}
