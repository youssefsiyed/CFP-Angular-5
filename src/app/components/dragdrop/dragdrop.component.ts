import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TalkComponent } from '../talk/talk.component';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Slot } from '../../models/Slot';
import { Schedulling } from '../../models/Schedulling';
import { SlotService } from '../../services/slot.service';
import { AllocateService } from '../../services/allocate.service';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {
  showCheck: boolean = false;
  schedulling: Schedulling; 
  //schedullingAll : Schedulling
  //scheduls : Slot[];
  scheduls: Schedulling[];
  @ViewChild(TalkComponent) child;

  constructor(
    private router: Router,
    private schedullingSoltService: SlotService,
    private schedullingService: AllocateService,
    private dragulaService: DragulaService
  ) {}

  ngOnInit() {
    this.schedullingService.getSchedullings().subscribe(scheduls => {
      this.scheduls = scheduls;
    });
  }
  ////////////////////////////////////////////////////////////
  onDrag() {
    this.dragulaService.setOptions('bag-task1', {
      //revertOnSpill: true
      //ignoreInputTextSelection
      removeOnSpill: true
    });
  }
  //////////////////////////////////////////////////////////////////
  SaveAllSchedling() {
    this.schedullingService.Combine(this.scheduls).subscribe(schedulling => {
      console.log('ALL Schedulling Add');
      this.showCheck = true;
    });
  }
  ////////////////////////////////////////////////////////////////
  onSaveSchedling() {
    this.schedullingService
      .saveSchedullings(this.schedulling)
      .subscribe(schedulling => {
        console.log('schedulling Add');
        this.showCheck = true;
      });
  }
}
