import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(id: number): Observable<any> {
    return this.http.get(`/api/users/${id}`);
  }

  getAllUsersFollow(id: number): Observable<any> {
    return this.http.get(`/api/followers/${id}`);
  }


}
