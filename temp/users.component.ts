import { Component } from '@angular/core';
import { IUser } from './services/user';
import { UsersService } from './services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
    title = 'List of users';
    users!: IUser;

    constructor(service: UsersService) {
        service.getUsers().subscribe(data => this.users = data);
    }
}
