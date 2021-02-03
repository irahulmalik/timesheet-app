import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  data : any;
  constructor(private auth: AuthService,
    private router: Router) { 
    auth.callapi().subscribe(val => {
      this.data = val
    }) 
  }
  ngOnInit(): void {
  }
  showdetails(id:number){
    this.router.navigate(["/userdetails", id])
  }

}
