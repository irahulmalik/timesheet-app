import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";

import { UserdetailsComponent } from './userdetails.component';
import { UserdetailsdisplayComponent } from './userdetailsdisplay.component';
import { CommonModule } from '@angular/common';
import { deleteComponent } from './delete.component';
import { MaterialModule } from '../material.module';

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
    UserdetailsdisplayComponent,
    deleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
        
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: []
})
export class UserDetailsModule { }
