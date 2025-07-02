import { Component, OnInit } from '@angular/core';
import { UserListComponents } from './user-list.components/user-list.components';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time.component/time.component';
import { catchError, of } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [UserListComponents, CommonModule, TimeComponent],
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class App implements OnInit {
    users: IUser[] | undefined;
    errorLoadingUsers = false;

    constructor(public userService: UserService) { }

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(search?: string): void {
        this.users = undefined;
        this.errorLoadingUsers = false;
        this.userService.loadUsers(search).pipe(
            catchError(() => of([]))
        ).subscribe({
            next: users => this.users = users,
            error: error => {
                console.error(error);
                this.errorLoadingUsers = true;
            },
            complete: () => console.log('load users stream completed')
        })

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
        const { value } = searchInput;
        this.loadUsers(value)
    }
}
