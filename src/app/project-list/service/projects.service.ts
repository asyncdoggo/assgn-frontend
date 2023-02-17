import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/login/services/login';
import { IProjects } from './project';
import { IStatus } from './status';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    private url2 = "http://localhost:3000/projects";
    private token = sessionStorage.getItem("token")
    constructor(private http: HttpClient) { }

    getProjects(page: any, size: any, sortoption: any): Observable<IProjects> {
        return this.http.get<IProjects>(
            this.url2 + `?page=${page}&size=${size}&sort=${sortoption}`,
            {
                headers: {
                    token: this.token ? this.token : ""
                }
            }
        );
    }

    search(searchquery: any): Observable<IProjects> {
        return this.http.get<IProjects>(
            this.url2 + `?search=${searchquery}`,
            {
                headers: {
                    token: this.token ? this.token : ""
                }
            }
        );
    }

    changeStatus(status:any,id: any): Observable<IStatus> {
        return this.http.put<IStatus>(
            this.url2,
            {
                id:id,
                status:status
            },
            {
                headers: {
                    token: this.token ? this.token : ""
                }
            }
        );
    }
}
