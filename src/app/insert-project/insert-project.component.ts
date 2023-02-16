import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from './service/insert.service';

@Component({
  selector: 'app-insert-project',
  templateUrl: './insert-project.component.html',
  styleUrls: ['./insert-project.component.scss']
})
export class InsertProjectComponent {
  constructor(private service:InsertService, private router:Router){

  }

  navigate(path:string){
    this.router.navigate([path])
  }
}
