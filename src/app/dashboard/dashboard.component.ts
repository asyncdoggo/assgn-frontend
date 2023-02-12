import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICounters } from './service/counters';
import { DashboardService } from './service/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    counters:any;
    constructor(private service: DashboardService, private router: Router) {
        service.getCounters().subscribe(value => {
            if(value.message == "success"){
                this.counters = value.counters
            }
        })
    }
}
