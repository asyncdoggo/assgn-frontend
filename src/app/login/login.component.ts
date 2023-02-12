import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    error_message = ""
// email: ayushdeshpande81@gmail.com pw: ayush
    constructor(private service: LoginService, private router: Router) { }
    loginUser(email: String,password: string){
        let error_message = "";
        this.service.loginUser(email,password)
        .pipe(
            catchError(error => {
                console.log(error)
                if(error.status === 0){
                    this.error_message = "connection error";
                }
                else{
                    this.error_message = error.error.message
                }
                return throwError(() => new Error(error))
            })
        )
        .subscribe(value => {
            if(value.message == "success"){
                sessionStorage.setItem("token",value.token as string);
                console.log(value.token)
                this.router.navigate([""])
            }
        })
    }
}
