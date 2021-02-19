import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit} from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  title = 'timesheet-app';
  loggedin: boolean = false;
  constructor(private auth: AuthService){
    
  }
  ngOnInit(){
    this.auth.logChecker.subscribe(res => {
      this.loggedin = res
    })
  }
  

}
