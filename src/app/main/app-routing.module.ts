import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InsertProjectComponent } from '../insert-project/insert-project.component';
import { LoginComponent } from '../login/login.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { LoginGaurd } from './loginGaurd';
import { LogoutGaurd } from './logoutGaurd';

let token = sessionStorage.getItem("token")


const routes: Routes = [
    {path: "", component: LoginComponent,canActivate: [LoginGaurd]},
    {path: "dashboard", component:DashboardComponent, canActivate:[LogoutGaurd]},
    {path: "insert", component: InsertProjectComponent, canActivate:[LogoutGaurd]},
    {path: "projects", component: ProjectListComponent, canActivate:[LogoutGaurd]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
