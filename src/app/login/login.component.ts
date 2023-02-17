import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    visibility = "visibility_off"
    visible = false
    error_message = ""
    loginForm: FormGroup;

// email: ayushdeshpande81@gmail.com pw: ayush
    constructor(private service: LoginService, private router: Router, private fb: FormBuilder) { 
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
          });
    }


    loginUser(){

        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
          }

        const email = this.loginForm.value.email
        const password = this.loginForm.value.password
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
                this.router.navigate(["/dashboard"])
            }
        })
    }

    toggleVisibility(){
        if(this.visible){
            this.visibility = "visibility_off"
        }
        else{
            this.visibility = "visibility"
        }
        this.visible = !this.visible
    }
}
