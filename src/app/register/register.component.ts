import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    
     this.auth.registerUser(form.value)


    form.reset();
  }
}
