import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dragulaService: DragulaService) {

    dragulaService.setOptions('bag-task1', {
       //revertOnSpill: true
       //ignoreInputTextSelection
       removeOnSpill: true
    });

    // dragulaService.setOptions('bag-task1', {
    //   // moves: function (el, container, handle) {
    //   //   return true;                      // elements are always draggable by default
    //   // },
    //   moves: function (el, source, handle, sibling) {
    //     return handle.classList.contains('bag-task1');
    // },
    //   canBeAccepted: function (el, target, source, sibling) { // applied with source container options
    //    return true;                      // can be dragged item accepted by target? (source context used)
    //  },
    //   direction: 'vertical',              // Y axis is considered when determining where an element would be dropped
    //   revertOnSpill: false,               // item returns to original place
    //   removeOnSpill: false                // item will be removed if not placed into valid target
    // })
  }
  
}

