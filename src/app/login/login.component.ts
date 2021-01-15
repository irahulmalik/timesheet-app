import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  name: string;
  password: string;
  constructor(private auth:AuthService){
    
  }
  ngOnInit(){
    this.onRegister();
  }
onSubmit(form: NgForm){
  console.log(form.value);
  
  console.log(this.auth.login(form.value));
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
