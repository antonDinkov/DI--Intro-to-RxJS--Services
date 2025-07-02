import { Component } from '@angular/core';
import { UserListComponents } from './user-list.components/user-list.components';
import { UserService } from './user.service';
import { myStringInjectionToken } from './token';

@Component({
    selector: 'app-root',
    imports: [UserListComponents],
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class App {
    constructor(public userService: UserService) {}
}
