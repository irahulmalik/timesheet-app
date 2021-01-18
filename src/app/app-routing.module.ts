import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AddtaskComponent } from "./addtask/addtask.component";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes=[
    {
        path: '',
        component:LoginComponent,
        pathMatch:'full'
    },
    {path: 'login',
    component:LoginComponent
    },
    {path: 'register',
component: RegisterComponent
},
{
    path: 'addtask',
    component: AddtaskComponent,
    canActivate: [AuthGuard]
}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}