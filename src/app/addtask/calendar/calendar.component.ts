import { Component, OnChanges, OnInit } from '@angular/core';
import {from} from 'rxjs';
import {buildEventApis, CalendarOptions, getDateMeta} from '@fullcalendar/angular';
import { AuthService } from 'src/app/auth.service';
import { UsertaskService } from 'src/app/usertask.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  today=new Date();
  dates : Array<{title:string,date: Date}>=[]
  calendarOptions: CalendarOptions;
    constructor(private user:UsertaskService){}
    ngOnInit(): void{
      this.user.getdata().subscribe(res=>{
        let userWorkWetails = res[0].workdetails//i want to use this to copy data
        for (let i=0; i<res[0].workdetails.length; i++){
          let item = {
            title: res[0].workdetails[i].duration,
            date: res[0].workdetails[i].date,
          }
          this.dates.push(item)
        }
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.handleDateClick.bind(this),
    
          events: [
              {
                daysOfWeek: [0,6], //Sundays and saturdays
                bgcolor:"blue",
                overLap: false
              },
              ...this.dates
            ]
        };
      })
    }
    handleDateClick(arg) {
      //this function shoud emit function and add task, use userWorkDetails to send workdetails
        if(arg.dateStr === this.today){
          alert('Timesheet filled');
        }
        else{
          console.log(arg)
          alert('Timesheet for future is frozen. ' + arg.dateStr);
        }
    }
}
