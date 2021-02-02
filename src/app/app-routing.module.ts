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
        component: RegisterComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'addtask',
        component: AddtaskComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'userDetails',
        component: UserdetailsComponent,
        canActivate: [AuthGuard],
        children:[
            {
                path: ':id',
                component: UserdetailsdisplayComponent
        }
        ]
    },
    {
        path: 'userdetails/:id',
        component: UserdetailsdisplayComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'branch',
        component: BranchComponent,
        canActivate: [AuthGuard]
    }

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}