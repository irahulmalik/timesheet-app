import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userdetailsdisplay',
  templateUrl: './userdetailsdisplay.component.html',
  styleUrls: ['./userdetailsdisplay.component.css']
})
export class UserdetailsdisplayComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute,
    private auth: AuthService) { 
    
  }
  id: number
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']
    this.auth.callapi().subscribe(val => {
      this.data = val
      console.log(this.data)
    }) 
  } 
  savedata(){
      let eles = <HTMLInputElement><unknown>document.getElementsByClassName('checks');
      let checkbox = document.getElementsByName('Approve')
      for(let i=0; i< checkbox.length; i++){
        if(eles[i].checked){
          eles[i].disabled=true
        }
      }
  }
}