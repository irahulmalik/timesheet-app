import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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
  triggercalendar: Subject<void> = new Subject();
  data: any;
  showAlert: boolean = false;
  constructor(private auth: AuthService,
              private usertask: UsertaskService,
              private router:Router) { 
    // usertask.getdata().subscribe(val =>{
    //   this.data = val
    // })
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
    this.usertask.getdata().subscribe(val =>{
      this.data = val
    })
  }
  //addfunction that adds work details
  onaddtask(form: NgForm){
    console.log(form.value)
    this.triggercalendar.next()
    this.auth.addtask(form.value)
    this.showAlert = true;
    setTimeout(() =>{
      this.showAlert = false
    }, 3000)
    this.usertask.getdata().subscribe(val =>{
      this.data = val
    })
    this.ngOnInit()
  }
  clearInfo(form: NgForm){
    form.reset()
  }
  //copydata function
  Copydata(wokd){
    console.log(wokd)
    this.auth.addtask(wokd)
      console.log('data added')
        this.showAlert = true;
        setTimeout(() =>{
        this.showAlert = false
        // this.router.navigate(['addtask'])
          this.ngOnInit()
        }, 3000)

  }
}
