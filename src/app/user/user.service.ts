import { Injectable } from '@angular/core';
import { iUser } from './iuser';
import { Observable, throwError } from 'rxjs';
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

  constructor(private http: HttpClient) { 
    this.getUsers().subscribe(
      users => {
        this.users = users;
      }
    );
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
