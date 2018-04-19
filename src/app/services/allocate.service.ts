import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Talk } from '../models/Talk';
import { Slot } from '../models/Slot';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()
export class AllocateService {

  postsUrl: string = 'http://localhost:3000/talks';
  slotUrl :string = 'http://localhost:5000/slots';

  constructor(private http : HttpClient) { }

//////////////////////////// Get One Talk
getTalk(id :number) : Observable<Talk> {
  //const url =`${this.postsUrl}/${id}`;
  return this.http.get<Talk>(this.postsUrl+"/"+id);
}
}
