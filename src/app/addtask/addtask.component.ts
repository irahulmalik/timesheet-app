import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { task } from '../models/tasks';
import { UsertaskService } from '../usertask.service';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  // tasks: task[] = [];
  data: any;
  constructor(private auth: AuthService,
              private usertask: UsertaskService) { 
    usertask.getdata().subscribe(val =>{
      this.data = val
    })
  }

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
    this.auth.addtask(form.value)
      let elem = document.getElementById("alert")
        elem.classList.remove("hidden")
        setTimeout(() =>{
        elem.classList.add("hidden")
        window.location.reload()
        }, 3000)
      // alert("Task Added Successfully")
    
  }
  clearInfo(form: NgForm){
    form.reset()
  }
  //copydata function
  Copydata(wokd){
    console.log(wokd)
    this.auth.addtask(wokd)
      console.log('data added')
      let elem = document.getElementById("alert")
        elem.classList.remove("hidden")
        setTimeout(() =>{
        elem.classList.add("hidden")
        window.location.reload()
        }, 3000)
      // alert("Task Added Successfully")
    

  }
}
