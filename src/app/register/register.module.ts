import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { RegisterComponent } from './register.component'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: RegisterComponent,
    },
  

];
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: []
})
export class RegisterModule { }
