import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/login/services/login';
import { IProjects } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    private url2 = "http://localhost:3000/projects";
    private token = sessionStorage.getItem("token")
    constructor(private http: HttpClient) {}

    getProjects(): Observable<IProjects> {
        return this.http.get<IProjects>(
            this.url2,
            {
                headers:{
                    token: this.token? this.token : ""
                }
            }
            );
    }
}
