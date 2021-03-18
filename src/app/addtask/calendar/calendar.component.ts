import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular';
import { UsertaskService } from 'src/app/usertask.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { dialogComponent } from './mydialog.component';
import { Observable } from 'rxjs';
import { mydeletedialogComponent } from './mydeletedialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  today=new Date();
  dates : Array<{title:string,date: Date}>=[]
  pipe = new DatePipe('en-US')
  userWorkDetails: any;
  userWorkDetailsmy: any;
  @Input() trigger: Observable<void>;
  @Output() copyTask = new EventEmitter()
  calendarOptions: CalendarOptions;
    constructor(private user:UsertaskService,
                private dialog: MatDialog){}
    ngOnInit(): void{
      this.getCalendarData()
      this.trigger.subscribe(val=>{console.log("called", val)
      setTimeout(()=>{this.getCalendarData()},1000)})
    }
    getCalendarData(){
      this.user.getdata().subscribe(res=>{
        this.userWorkDetails = res[0].workdetails//i want to use this to copy data
        this.dates = []
        for (let i=0; i<res[0].workdetails.length; i++){
          let item = {
            title: res[0].workdetails[i].duration,
            date: res[0].workdetails[i].date,
          }
          this.dates.push(item)
          // console.log(this.dates)
        }
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.handleDateClick.bind(this),
          eventColor: 'Red',
          events: [
              {
                daysOfWeek: [0,6], //Sundays and saturdays
                overLap: false
              },
              ...this.dates
            ]
        };
      })
    }
    handleDateClick(arg) {
      //this function shoud emit function and add task, use userWorkDetails to send workdetails
      //NEW STUFFF MAKING A DIALOG
      //fix this dialog
      let len = this.userWorkDetails.length
      for(let i = 0; i < len; i++){
        if(arg.dateStr != this.userWorkDetails[i].date){
          this.userWorkDetailsmy = undefined
        }else{
        this.userWorkDetailsmy = this.userWorkDetails[i]
          break
        }
        // if (arg.dateStr === this.userWorkDetails[i].date){
        //   this.userWorkDetailsmy = this.userWorkDetails[i]
        //   console.log(this.userWorkDetailsmy)
        // }else{
        //   console.log("What")
        //   this.userWorkDetailsmy = undefined
        // }
      }
      //
      let b = this.today.toISOString().split("T")
      if(arg.dateStr == b[0]){
        console.log("sup")
        alert("cant copy todays timesheet")
        // const dialogRef= this.dialog.open(mydeletedialogComponent)
        // dialogRef.afterClosed().subscribe(val=>{
        //   if(val){
        //     console.log('delete true',this.userWorkDetailsmy)
        //   }else{
        //     console.log('delete false')
        //   }
        // })
      }else{
        const dialogRef = this.dialog.open(dialogComponent, {data:{
          workdetails: this.userWorkDetailsmy //workdetails
        }});
        dialogRef.afterClosed().subscribe(val => {
          console.log(val)
          if(val){
            this.copyTask.emit(this.userWorkDetailsmy)
            // this.ngOnInit()
            setTimeout(()=>{this.getCalendarData()},1000)
          }else{
            console.log("do not copy")
          }
        })
      }
      
        
        // else{
        //   let len = this.userWorkDetails.length
        //   for(let i = 0; i < len; i++){
        //     if (arg.dateStr === this.userWorkDetails[i].date){
        //       this.copyTask.emit(this.userWorkDetails[i])
        //     }else{
        //       console.log("looking")
        //     }
        //   }
        //   // if( arg.dateStr == )
        //   // alert('Timesheet for future is frozen. ' + arg.dateStr);
        // }
    }
}
