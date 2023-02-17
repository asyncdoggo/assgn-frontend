import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from './service/insert.service';

@Component({
  selector: 'app-insert-project',
  templateUrl: './insert-project.component.html',
  styleUrls: ['./insert-project.component.scss']
})
export class InsertProjectComponent {

  project = {
    name:"",
    reason: "",
    type:"",
    division:"",
    category:"",
    priority:"",
    department:"",
    start_date:"",
    end_date:"",
    location:""
  }

  constructor(private service:InsertService, private router:Router){

  }

  insertProject(){
    this.service.insertProject(this.project).subscribe((value) => {
      if(value.message == "success"){
        console.log("Submit successfully")
      }
    })
  }

  logout(){
    sessionStorage.clear()
    this.navigate("/")
  }

  navigate(path:string){
    this.router.navigate([path])
  }
}
