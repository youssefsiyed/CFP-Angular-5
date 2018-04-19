import { Component, OnInit , Input } from '@angular/core';
import { TalkService } from '../../services/talk.service';
import { Talk } from '../../models/Talk';



@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css'] 
})
export class TalkComponent implements OnInit {

  talk :Talk[];
  showSpinner: boolean =true;
  show: boolean =true;
  showCheck: boolean =false;


  constructor( private talkService : TalkService) { }

  /////////////////////HIDE & SHOW ////////////////////////
toggle() {
  this.show = !this.show;
  this.showCheck = true;
}
///////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.talkService.getTalks().subscribe(talk => {
      this.talk = talk;
      this.showSpinner = false;
    })
  }

}
