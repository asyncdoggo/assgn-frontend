import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from './service/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
    token = sessionStorage.getItem("token")
    range = (n: Number) => [...Array(n).keys()]
    projects:any
    page = 1
    size = 10
    pages:any
    searchitem:any
    sortoption = "name";


    constructor(private service: ProjectsService,private router:Router){
        service.getProjects(this.page,this.size, this.sortoption).subscribe(value => {
            if(value.message == "success"){
                this.projects = value.projects
                this.pages = value.pages
            }
        })
    }

    navigate(path:string){
        this.router.navigate([path])
      }
    

      changePage(p:number){
        this.page = p;
        this.service.getProjects(this.page,this.size,this.sortoption).subscribe(value => {
            if(value.message == "success"){
                this.projects = value.projects
                this.pages = value.pages
            }
        })
      }

      priority(pr:any){
        switch (pr) {
            case 2:
                return "low"
            case 1:
                return "medium"
            case 0:
                return "High"            
            default:
                return ""
        }
      }

      search(){
        this.service.search(this.searchitem).subscribe((value) => {
            if(value.message == "success"){
                this.projects = value.projects
            }
        })
      }

      logout(){
        sessionStorage.clear()
        this.navigate("/")
      }

      start(id:string){
        this.service.changeStatus("Running",id).subscribe((value)=>{
            this.changePage(this.page)
        })
      }
      cancel(id:string){
        this.service.changeStatus("Cancelled",id).subscribe((value)=>{
            this.changePage(this.page)
        })
      }
      close(id:string){
        this.service.changeStatus("Closed",id).subscribe((value)=>{
            this.changePage(this.page)
        })
      }

    
}
