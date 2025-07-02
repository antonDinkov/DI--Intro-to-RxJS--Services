import { Inject, Injectable } from '@angular/core';
import { IUser } from './interfaces/user';
import { myStringInjectionToken } from './token';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    protected title = 'class-exercise';

    users = [
        {
            name: 'Ivan 1',
            age: 21
        },
        {
            name: 'Ivan 2',
            age: 22
        },
        {
            name: 'Ivan 3',
            age: 23
        }
    ];
    constructor(@Inject(myStringInjectionToken) myString: string) {
        console.log(myString)
    }

    addNewUserHandler(newUser: IUser): void {
        this.users = this.users.concat(newUser);
        /* this.users.push(newUser); */
    }
}
