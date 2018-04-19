import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Talk } from '../models/Talk';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class TalkService {
   
   // postsUrl: string = 'http://xhub.ddns.net:9000/schedulling/approvedTalks?confType=conf';
   postsUrl: string = ' http://localhost:3000/talks';
   
  constructor(private http: HttpClient) { }

  //////////////////////////// Get Talk 
  getTalks() : Observable<Talk[]> {
    return this.http.get<Talk[]>(this.postsUrl);
  }
  
  //////////////////////////// Get One Talk
  getTalk(id :number) : Observable<Talk> {
    //const url =`${this.postsUrl}/${id}`;
    return this.http.get<Talk>(this.postsUrl+"/"+id);
  }
  /////////////////////////// Post Talk
  saveTalks(talk: Talk): Observable<Talk> {
    return this.http.post<Talk>(this.postsUrl, talk, httpOptions);
  }
}
