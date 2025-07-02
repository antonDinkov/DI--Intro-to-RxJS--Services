import { Inject, Injectable } from '@angular/core';
import { IUser } from './interfaces/user';
import { myStringInjectionToken } from './token';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    protected title = 'class-exercise';

    constructor(private http: HttpClient) {
        
    }

    loadUsers(search: string = '') {
        const query = search ? `?email_like=${search}` : '';
        return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users${query}`);
    }

}
