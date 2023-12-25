import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../types/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss'],
})
export class UsersListComponent {
  // property binding
  @Input() users: UserInterface[] = [];
  @Output() removeUser = new EventEmitter<number>();
  @Output() addUserEvent = new EventEmitter<string>();
  newUserName: string = '';

  setNewUserName(userName: string): void {
    this.newUserName = userName;
  }

  addUser(): void {
    this.addUserEvent.emit(this.newUserName);
    this.newUserName = '';
  }
}
