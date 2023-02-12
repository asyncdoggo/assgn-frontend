import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';

let token = sessionStorage.getItem("token")


const routes: Routes = [
    {
        path: "", component: token? DashboardComponent : LoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
