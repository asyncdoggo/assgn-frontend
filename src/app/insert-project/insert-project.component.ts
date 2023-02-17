import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from './service/insert.service';

@Component({
  selector: 'app-insert-project',
  templateUrl: './insert-project.component.html',
  styleUrls: ['./insert-project.component.scss']
})
export class InsertProjectComponent {

 sleep(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


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

  error:any

  constructor(private service:InsertService, private router:Router){

  }
  
  insertProject(){
    this.service.insertProject(this.project).subscribe( async (value) => {
      if(value.message == "success"){
        this.error = "Saved successfully"
        await this.sleep(5000)
        this.error = ""
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
