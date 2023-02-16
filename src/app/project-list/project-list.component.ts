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
    size = 5
    pages:any
    constructor(private service: ProjectsService,private router:Router){
        service.getProjects(this.page,this.size).subscribe(value => {
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
        this.service.getProjects(this.page,this.size).subscribe(value => {
            if(value.message == "success"){
                this.projects = value.projects
                this.pages = value.pages
            }
        })
      }

      start(id:string){

      }
      cancel(id:string){

      }
      close(id:string){

      }

    
}
