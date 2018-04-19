import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/';

import { Slot } from '../models/Slot';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class SlotService {
   
  // postsUrl: string = 'http://xhub.ddns.net:9000/schedulling/solts';
  soltsUrl: string = 'http://localhost:5000/slots';
  
  constructor(private http : HttpClient) { }

  //////////////////////////// Get Solts 
  getSlots() : Observable<Slot[]> {
    return this.http.get<Slot[]>(this.soltsUrl);
  }
}
