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
    auth.callapi().subscribe(val => {
      this.data = val
    }) 
  }
  id: number
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']
    console.log(this.id)
  } 
  savedata(){

      // let elements = <HTMLInputElement>document.getElementsByClassName("checkbox");
      let eles = <HTMLInputElement><unknown>document.getElementsByClassName('checks');
      let x = <HTMLInputElement><unknown>document.getElementsByClassName('checks').length;
      for(let i = 0; i < x; i++){
        if(eles[i].checked){
          eles[i].disabled=true
        }
        
        
      }

      // elements.disabled = true;
      // Get the element with id="myDIV" (a div), then get all elements inside div with class="example"
    
  }



}
