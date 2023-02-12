import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICounters } from './counters';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private token = sessionStorage.getItem("token")
    url = "http://localhost:3000/counters"

    constructor(private http: HttpClient) {}

    getCounters(): Observable<ICounters> {
        return this.http.get<ICounters>(this.url,{
            headers:{
                token:this.token? this.token : ""
            }
        });
    }
}
