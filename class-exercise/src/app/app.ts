import { Component, OnInit } from '@angular/core';
import { UserListComponents } from './user-list.components/user-list.components';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [UserListComponents, CommonModule],
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class App implements OnInit {
    users: IUser[] | undefined;
    constructor(public userService: UserService) {}

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(search?: string): void {
        this.users = undefined;
        this.userService.loadUsers(search).subscribe(users => this.users = users);
    }

    reloadButtonHandler() {
        this.loadUsers();
    }

    searchButtonClickHandler(searchInput: HTMLInputElement): void {
        const {value} = searchInput;
        this.loadUsers(value)
    }
}
