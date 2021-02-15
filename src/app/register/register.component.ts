import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public alerterror = 'hidden'
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    //  if(this.auth.registerUser(form.value) === true){
    //    alert("User added with Username:" + form.value.Username+ " & password:" + form.value.Password)
    //  }
    this.auth.reggUser(form.value).subscribe(val =>{
        // this.auth.newUserWork(val.id , val.username)
        this.auth.newUserWork(val)
      }
    )
    this.alerterror = 'visible'
    setTimeout(() =>{
      this.alerterror = 'hidden'
      }, 3000)     
    form.reset();
    
  }
  clear(form: NgForm){
    form.reset();
  }
}
