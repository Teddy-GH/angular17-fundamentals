import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserInterface } from '../types/user.interface';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('http://localhost:3000/users').pipe(
      map((users: UserInterface[]) => {
        return users.map(user => ({
            id: user.id,
            name: user.name,
            age: `${user.age} years old`,
        }));
      })
    );
  }

  removeUser(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

  addUser(name: string): Observable<UserInterface> {
    const newUser = {
      name,
      age: 18,
    };
    return this.http.post<UserInterface>(
      'http://localhost:3000/users',
      newUser
    );
  }
}
