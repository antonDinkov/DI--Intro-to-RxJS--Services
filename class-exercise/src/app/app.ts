import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser } from './interfaces/user';
import { UserListComponents } from './user-list.components/user-list.components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserListComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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

  addNewUserHandler(newUser: IUser): void {
    /* this.users = this.users.concat(newUser); */
    /* this.users.push(newUser); */
  }

  constructor() {
    setInterval(() =>{
        console.log('New user added');
        this.users.push({
        name: 'Ivan 4',
        age: 23
    })
    }, 5000);
  }
}
