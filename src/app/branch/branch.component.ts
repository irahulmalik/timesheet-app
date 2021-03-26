import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  alert: boolean = false;
  range:FormGroup = new FormGroup({
    sickReason: new FormControl('', Validators.required),
      start: new FormControl('',Validators.required),
      end: new FormControl('',[Validators.required])
  });
  minDate: Date;
  maxDate: Date;
  constructor(private auth: AuthService) { }
  

  ngOnInit(): void {}
  async leave(){
  let startd = this.range.value.start.toISOString().split("T")
  let loop = this.range.value.start
  // console.log("loop", loop.toDateString())
  while(loop.toISOString()<=this.range.value.end.toISOString()){
    let n = loop.toISOString().split("T")
    let mydata = {
      taskname:"leave",
      leave :true,
      duration:"",
      won:"",
      taskcategory:this.range.value.sickReason,
      date: n[0]
    }
    let newDate= loop.setDate(loop.getDate() +1);
    loop = new Date(newDate);
    console.log("yeah",n[0]);
    await this.auth.leaveapply(mydata);
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 3000);

  }
}
}