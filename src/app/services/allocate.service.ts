import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TalkService } from '../services/talk.service';
import { SlotService } from '../services/slot.service';
import { Schedulling } from '../models/Schedulling';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()
export class AllocateService{


  //combineTwo : string = 'http://localhost:8080/schedulling/slots?confType=lab';
  shUrl : string = 'http://localhost:7000/slotsAll';

  constructor(private http : HttpClient,private talkService :TalkService,private slotService : SlotService) { }

//////////////////////////// Get Solts 
  getSchedullings() : Observable<Schedulling[]> {
    return this.http.get<Schedulling[]>(this.shUrl);
  }
/////////////////////////// Combine Talk and Slot
Combine(schedulling :Schedulling[]){
return this.http.post(this.shUrl,schedulling);
}

//////////// Save Schedulling Service ///////////////////////
saveSchedullings(schedulling : Schedulling) : Observable<Schedulling>  {
 return this.http.post<Schedulling>(this.shUrl,schedulling,httpOptions);
  }
}
