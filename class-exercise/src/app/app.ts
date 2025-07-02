import { Component, OnInit } from '@angular/core';
import { UserListComponents } from './user-list.components/user-list.components';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time.component/time.component';

@Component({
    selector: 'app-root',
    imports: [UserListComponents, CommonModule, TimeComponent],
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
        this.userService.loadUsers(search).subscribe(
            users => this.users = users, // next fn
            error => console.error(error), // error fn
            () => console.log('load users stream completed') // cmpleted fn
        );

        /* this.userService.loadUsers(search).subscribe({
            next: () => {},
            error: () => {},
            complete: () => {}
        }); */
    }

    reloadButtonHandler() {
        this.loadUsers();
    }

    searchButtonClickHandler(searchInput: HTMLInputElement): void {
        const {value} = searchInput;
        this.loadUsers(value)
    }
}
