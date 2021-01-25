import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AddtaskComponent } from './addtask/addtask.component';
import { DropdownDirective } from './dropdown.directive';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdetailsdisplayComponent } from './userdetails/userdetailsdisplay.component';
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
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
