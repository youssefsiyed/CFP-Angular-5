import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Talk } from '../../models/Talk';
import { Slot } from '../../models/Slot';

import { DropEvent } from 'ng-drag-drop';
import { TalkService } from '../../services/talk.service';
import { SlotService } from '../../services/slot.service';

@Component({
  selector: 'app-ng-drag',
  templateUrl: './ng-drag.component.html',
  styleUrls: ['./ng-drag.component.css']
})
export class NgDragComponent implements OnInit {
  talk: Talk[];
  slot: Slot[];
  droppedItems = []; // the new item drag to the table
  dragEnabled = true; // to enable the drag and drop fonction
  droppedTalk = []; // to drop the table of talk
  talkDropEnabled = true; // to enable drag the talk table

  constructor(
    private router: Router,
    private schedullingSoltService: SlotService,
    private talkService: TalkService,
    private slotService: SlotService
  ) {}

  ngOnInit() {
    this.talkService.getTalks().subscribe(
      talk => {
        this.talk = talk;
      },
      error => console.log('Erreur Detected!!!')
    );
    this.slotService.getSlots().subscribe(slot => {
      this.slot = slot;
    });
  }

  ///////////////////////////////////////
  onAnyDrop(e: DropEvent) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.id === 'AZE-7421') {
      this.removeItem(e.dragData, this.talk);
    } else {
      console.log('drag element have been made');
    }
  }
  ///////////////////////////////////////
  removeItem(item: any, list: Array<any>) {
    let index = list
      .map(function(e) {
        return e.name;
      })
      /// we use the map fonction for the mapping the data to the table
      .indexOf(item.name);
    list.splice(index, 1);
  }
}
