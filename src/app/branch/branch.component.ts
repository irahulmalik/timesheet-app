import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  range:FormGroup = new FormGroup({
    sickReason: new FormControl(),
      start: new FormControl(new Date()),
      end: new FormControl(new Date())
  });
  minDate: Date;
  maxDate: Date;
  constructor() { }
  

  ngOnInit(): void {}
leave(){
  console.log("Leave called", this.range.value)
  console.log("iterating for date")
  // for( let i: Date = this.range.value.start ; i<=this.range.value.end ; i.getDate() +1){
    // console.log(i)
  // } 
}
}