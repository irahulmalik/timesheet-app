import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { task } from '../models/tasks';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  // tasks: task[] = [];
  constructor(private auth: AuthService) { }
  
  tasks: task[] = [
    {
      taskname:"Audits"
    },
    {
      taskname:"Business Development"
    },
    {
      taskname:"Consultancy"
    },
    {
      taskname:"Defect Prevention"
    },
    {
      taskname:"Group Mentoring"
    },
    {
      taskname:"Infrastructure Management"
    },
    {
      taskname:"Leading Change"
    },
    {
      taskname:"Personel Mentoring"
    },
    {
      taskname:"Project Management"
    },
    {
      taskname:"Recruitment"
    },
    {
      taskname:"Review"
    },
    {
      taskname:'Talent and Development'
    }
  ]
  ngOnInit(): void {
  }
  //addfunction that adds work details
  onaddtask(form: NgForm){
    console.log(form.value)
    if (this.auth.addtask(form.value)){
      console.log('data added')
      alert("Task Added Successfully")
    }
  }
  clearInfo(form: NgForm){
    form.reset()
  }
}
