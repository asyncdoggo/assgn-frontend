import { Component } from '@angular/core';
import { ProjectsService } from './service/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
    token = sessionStorage.getItem("token")
    projects:any
    constructor(private service: ProjectsService){
        service.getProjects().subscribe(value => {
            if(value.message == "success"){
                this.projects = value.projects
            }
        })
    }
}
