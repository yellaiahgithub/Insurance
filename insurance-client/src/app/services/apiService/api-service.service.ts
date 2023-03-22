import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiURL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createUser(userData: any): Observable<any> {
    return this.http.post(
      this.apiURL + '/addCustomer', userData, this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  checkMail(data: any): Observable<any> {
    return this.http.post(
      this.apiURL + '/verifyMail', data, this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  login(data: any): Observable<any> {
    return this.http.post(
      this.apiURL + '/login', data, this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  updatePassowrd(data: any): Observable<any> {
    return this.http.post(
      this.apiURL + '/updatePassword', data, this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  getCustomerData(email: String): Observable<any> {
    return this.http.get(
      this.apiURL + '/getCustomerData?email=' + email, this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = error.error.message;
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}


