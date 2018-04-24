import { Component, OnInit ,Input } from '@angular/core';
import { Slot } from '../../models/Slot';
import { SlotService } from '../../services/slot.service';
import * as _ from 'lodash';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  slot : Slot[];
  showSpinner: boolean =true;
  @Input () showCheck: boolean =false;

  constructor(private slotService : SlotService) { }

  ngOnInit() {
    this.slotService.getSlots().subscribe(slot =>{
      this.slot = slot;
      this.showSpinner = false;
  })
}
/////////////////////////////////////////////////////////////////
toggleVisibility(e){
  this.showCheck= e.target.checked;
}

}
