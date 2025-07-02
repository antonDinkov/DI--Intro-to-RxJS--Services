import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
export class UserListComponents {
    @Input() userArray: IUser[] = [];

}
