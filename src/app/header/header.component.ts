import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: string;
  islogedIn: boolean;
  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.logchecker()

  }
  logchecker(){
    if (this.auth.loggedIn()){
      this.islogedIn = true
      this.role = localStorage.getItem('role')
    }
    else{
      this.islogedIn = false
      this.role = localStorage.getItem('role')
    }
  }
  
  onLogout(){
    console.log("logging out")
    localStorage.clear()
  }


    
 
}
