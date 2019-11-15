import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http: HttpClient) { }

  followUser(id): Observable<any>{
    return this.http.post('/api/follow/', { userOne: 1, userTwo: id });
  }

  unfollowUser(id): Observable<any>{
    return this.http.post('/api/unfollow/', { userOne: 1, userTwo: id });
  }


}
