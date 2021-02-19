import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";

import { UserdetailsComponent } from './userdetails.component';
import { UserdetailsdisplayComponent } from './userdetailsdisplay.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: UserdetailsComponent,
        children: [{
          path: '/:id',
        component: UserdetailsdisplayComponent,
        }]
    },
    {
        path: '/:id',
        component: UserdetailsdisplayComponent,
    }

];
@NgModule({
  declarations: [
    UserdetailsComponent,
    UserdetailsdisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
        
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: []
})
export class UserDetailsModule { }
