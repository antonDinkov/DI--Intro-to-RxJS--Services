import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from '../interfaces/user';
import { UserListItemComponent } from '../user-list-item.component/user-list-item.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-list',
    imports: [CommonModule, UserListItemComponent],
    templateUrl: './user-list.components.html',
    styleUrls: ['./user-list.components.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponents implements OnInit, OnChanges, OnDestroy {
    @Input() userArray: IUser[] = [];
    @Output() addUser = new EventEmitter<IUser>();

    constructor() {
        console.log(this.userArray);
    }

    ngOnInit(): void {
        console.log(`This is on init: ${this.userArray}`)
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(`This is on changes: ${this.userArray}`)
        if (changes['userArray']) {
            console.log('userArray updated:', changes['userArray'].currentValue);
        }
    }

    ngOnDestroy(): void {

    }

    addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {
        console.log('Add new user called!');
        const { value: name } = userNameInput;
        const { valueAsNumber: age } = userAgeInput;

        this.addUser.emit({ name, age });

        userNameInput.value = '';
        userAgeInput.value = '';
    }
}
