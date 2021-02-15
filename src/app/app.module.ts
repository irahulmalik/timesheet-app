import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdetailsdisplayComponent } from './userdetails/userdetailsdisplay.component';
import { BranchComponent } from './branch/branch.component';

import { DropdownDirective } from './dropdown.directive';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    AddtaskComponent,
    DropdownDirective,
    UserdetailsComponent,
    UserdetailsdisplayComponent,
    BranchComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
