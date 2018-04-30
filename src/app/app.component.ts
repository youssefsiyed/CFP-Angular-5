import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private dragulaService: DragulaService) {
  //   // const bag: any = this.dragulaService.find('bag-task1');
  //   // if (bag !== undefined ) this.dragulaService.destroy('bag-task1');
  //   // this.dragulaService.setOptions('bag-task1', { revertOnSpill: true });
  // }
  constructor(private dragulaService: DragulaService) {
    this.dragulaService.setOptions('section-bag', {
      removeOnSpill: true,
      moves: function(el, container, handle) {
        return container.id !== 'overdiv';
      }
    });
  }
  // dragulaService.setOptions('bag-task1', {
  //    //revertOnSpill: true
  //    //ignoreInputTextSelection
  //    removeOnSpill: true
  // });

  // dragulaService.setOptions('bag-task1',{
  //   accepts: function (el, container, handle) {
  //       return handle.className === 'bag-task1';
  //     }
  //   });
  //   moves: function (el, source, handle, sibling) {
  //     return handle.classList.contains('bag-task1');
  // },
  // accepts: function (el, target, source, sibling) {
  //   return true;
  // },
  //   direction: 'vertical',             // Y axis is considered when determining where an element
  //   revertOnSpill: false,               // item returns to original place
  //   removeOnSpill: true                // item will be removed if not placed into valid target
  // })
}
