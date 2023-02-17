import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICounters } from './service/counters';
import { DashboardService } from './service/dashboard.service';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    constructor(private service: DashboardService, private router: Router) {
        service.getCounters().subscribe((value) => {
            if (value.message == 'success') {
                this.counters = value.counters;
            }
        });

        service.getcharts().subscribe((value) => {
            if (value.message == 'success') {
                let data = value.data;
                for (let i in data) {
                    this.deps.push(data[i]._id)
                    this.regs.push(data[i].registered_count)
                    this.closed.push(data[i].closed_count)
                }
                this.updateFlag = true
            }
        })
    }


    navigate(path:string){
        this.router.navigate([path])
    }
    logout(){
        sessionStorage.clear()
        this.navigate("/")
      }

    counters: any;
    deps: string[] = [];
    regs: number[] = [];
    closed: number[] = [];

    Highcharts: typeof Highcharts = Highcharts;
    updateFlag = false;
    chartOptions: Highcharts.Options = {
        chart: {
            type: 'column',
        },
        title: {
            text: 'Registration',
        },
        xAxis: {
            categories: this.deps,
            crosshair: true,
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of projects',
            },
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: 'Registered',
                data: this.regs,
                type: 'column',
            },
            {
                name: 'Closed',
                data: this.closed,
                type: 'column',
            },

        ],
    }

    
}
