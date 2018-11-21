import { Injectable } from '@angular/core';
import { iUser } from './iuser';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDataUrl = 'api/users';
  private users: iUser[] = [];

  getUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.userDataUrl).pipe(
      tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUser(id: number): Observable<iUser> {
    if(id === 0){
      return of(this.initializeUser());
    }
    const url = `${this.userDataUrl}/${id}`
    return this.http.get<iUser>(url).pipe(
      tap(data => console.log('getUser: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  constructor(private http: HttpClient) { 
    this.getUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }

  private initializeUser(): iUser {
    return {
      id: 0,
      name: null,
      secondName: null,
      email: null,
      phone: null,
      avatar: null,
      birthday: null,
      hobbies: ['']
    };
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
