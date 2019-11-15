import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  getJustTwetter(id: number): Observable<any> {
    return this.http.get(`/api/tweet/${id}`);
  }

  getTwettersFromUser(id: number): Observable<any> {
    return this.http.get(`/api/tweets/${id}`);
  }

  postTwett(message: string, id: number): Observable<any> {
    return this.http.post('/api/tweet/', { message, id });
  }


}
