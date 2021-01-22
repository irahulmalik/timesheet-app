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
  let res;
  if (res = this.auth.login(form.value)){
    localStorage.setItem('token', res[0])
    localStorage.setItem('role',res[1])
    localStorage.setItem('username', form.value.Username)
    this.router.navigate(['/addtask'])
  }
  form.reset();
}
// onRegister(){
//   const user={
//     Username: "Rahul",
//     Password: "Malik",
//     Role: "Manager"
//   };
//   this.auth.registerUser(user);
// }
}
