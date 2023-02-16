import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from './Response';




@Injectable({
    providedIn: 'root',
})
export class InsertService {
    private token = sessionStorage.getItem("token")
    url = "http://localhost:3000/projects"


    constructor(private http: HttpClient) {}

    insertProject(project:any): Observable<IResponse> {
        return this.http.post<IResponse>(this.url,
           project,
           {
            headers:{
                token:this.token? this.token : ""
            }
        });
    }
}
