import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';
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
  constructor(private auth: AuthService) { }
  

  ngOnInit(): void {}
leave(){
  let startd = this.range.value.start.toISOString().split("T")
  console.log("Leave called", startd[0])
  console.log("iterating for date")
  // for( let i: Date = this.range.value.start ; i<=this.range.value.end ; i.getDate() +1){
    // console.log(i)
  // } 
  let loop = this.range.value.start
  while(loop.toISOString()<=this.range.value.end.toISOString()){
    console.log("suo",loop.toISOString())
    let newDate= loop.setDate(loop.getDate() +1)
    loop = new Date(newDate)
    let mydata = {
      taskname:"leave",
      leave :"true",
      duration:"",
      won:"",
      taskcategory:"",
      date: loop.toISOString()
    }
    console.log(mydata)
    // this.auth.addtask(mydata)
  }
}
}