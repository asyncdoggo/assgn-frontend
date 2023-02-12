import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from './login';

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    private url = "http://localhost:3000/login";
    private url2 = "http://localhost:3000/projects";

    constructor(private http: HttpClient) {}

    loginUser(email:String, password: String): Observable<ILogin> {
        return this.http.put<ILogin>(this.url,{
            email:email,
            password:password
        });
    }
}
