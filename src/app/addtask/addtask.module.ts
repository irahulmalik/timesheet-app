import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { AddtaskComponent } from './addtask.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import  interactionPlugin  from "@fullcalendar/interaction";
import {dialogComponent} from "./calendar/mydialog.component"
import { MaterialModule } from '../material.module';
import { mydeletedialogComponent } from './calendar/mydeletedialog.component';
const routes: Routes = [
    {
        path: '',
        component: AddtaskComponent,
    },
  

];
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AddtaskComponent,
    CalendarComponent,
    dialogComponent,
    mydeletedialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    FullCalendarModule,
    MaterialModule
        
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: []
})
export class AddTaskModule { }
