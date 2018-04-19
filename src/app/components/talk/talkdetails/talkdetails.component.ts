import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params } from "@angular/router";
import { Talk } from '../../../models/Talk';
import { Location } from '@angular/common';
import { TalkService } from '../../../services/talk.service';

@Component({
  selector: 'app-talkdetails',
  templateUrl: './talkdetails.component.html',
  styleUrls: ['./talkdetails.component.css']
})
export class TalkdetailsComponent implements OnInit {

  talk :Talk;

  constructor (private routrerActive : ActivatedRoute,private talkservice:TalkService ,private location : Location) { }

  ngOnInit() {
    //this.route.data.subscribe( (data : Data) => { this.talk = data['talkRes'] });
   // const id = +this.routrerActive.snapshot.paramMap.get('id');
   const id = +this.routrerActive.snapshot.params['id'];
   this.talkservice.getTalk(id).subscribe(talk => this.talk = talk);
    this.routrerActive.params.subscribe((params : Params) => this.talkservice.getTalk(params['id']).subscribe(talk => this.talk = talk)
  );
  }

}
