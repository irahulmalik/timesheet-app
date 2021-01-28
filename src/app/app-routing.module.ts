import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AddtaskComponent } from "./addtask/addtask.component";
import { AuthGuard } from "./auth.guard";
import { BranchComponent } from "./branch/branch.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserdetailsComponent } from "./userdetails/userdetails.component";
import { UserdetailsdisplayComponent } from "./userdetails/userdetailsdisplay.component";

const routes: Routes=[
    {
        path: '',
        component:LoginComponent,
        pathMatch:'full'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'addtask',
        component: AddtaskComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'userDetails',
        component: UserdetailsComponent,
        children:[
            {
                path: ':id',
                component: UserdetailsdisplayComponent
        }
        ]
    },
    {
        path: 'userdetails/:id',
        component: UserdetailsdisplayComponent
    },
    {
        path: 'branch',
        component: BranchComponent
    }

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}