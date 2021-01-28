import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
onaddtask(form:NgForm){
  console.log(form.value)
  let elem = document.getElementById("alert")
        elem.classList.remove("hidden")
        setTimeout(() =>{
          
        elem.classList.add("hidden")
        }, 3000)
}
clearInfo(form: NgForm){
  form.reset()
}

}
