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
    
  }
  ngOnInit(){
    this.onRegister();
  }
onSubmit(form: NgForm){
  console.log(form.value);
  let res;
  if (res = this.auth.login(form.value)){
    localStorage.setItem('token', res)
    this.router.navigate(['/addtask'])
  }
  
  // this.auth.login(form.value).subscribe(
  //   res=>console.log(res),
  //   err => console.log(err)
  // )
  form.reset();
  // console.log(this.name);
  // console.log(this.password)
}
onRegister(){
  const user={
    Username: "Rahul",
    Password: "Malik",
    Role: "Manager"
  };
  this.auth.registerUser(user);
}
onName(event:Event){
  this.name = (<HTMLInputElement>event.target).value;
}
onPassword(event:Event){
  this.password = (<HTMLInputElement>event.target).value;
}
  
}
