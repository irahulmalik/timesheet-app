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
  if(!!this.auth.loginuser(form.value)){
    this.router.navigate(['/addtask'])
  }
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
