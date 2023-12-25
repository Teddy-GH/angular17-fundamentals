import { Component, OnInit } from '@angular/core';
import { UserInterface } from './types/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  users: UserInterface[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      console.log('users: ', users);
      this.users = users;
    });
  }

  removeUser(id: number): void {
    this.usersService.removeUser(id).subscribe(() => {
      console.log('Deleted from backend!', id);
      this.users = this.users.filter((user) => user.id !== id);
    });
  }

  addUser(name: string): void {
    this.usersService.addUser(name).subscribe((newUser) => {
      this.users = [...this.users, newUser];
    });
  }
}
