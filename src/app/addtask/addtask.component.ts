import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { task } from '../models/tasks';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  // tasks: task[] = [];
  constructor() { }
  
  tasks: task[] = [
    {
      taskname:'Talent and Development'
    },
    {
      taskname:"Leading Change"
    }
  ]
  ngOnInit(): void {
  }

}
