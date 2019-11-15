import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http: HttpClient) { }

  followUser(userOne: number, userTwo: number): Observable<any> {
    return this.http.post('/api/follow/', { userOne, userTwo });
  }

  unfollowUser(userOne: number, userTwo: number): Observable<any> {
    return this.http.post('/api/unfollow/', { userOne, userTwo });
  }


}
