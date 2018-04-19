import { Component,OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { TalkComponent } from '../talk/talk.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  showCheck : boolean= false;
  theCheckbox : boolean = false;
  @ViewChild(TalkComponent) child;

  constructor(private router : Router) { }
  // ngAfterViewInit() {
  //   this.showCheck = this.child.showCheck
  // }
  ngOnInit() {
  }
  
  //////////////////////////Navigate To ///////////////////////////
  goToTalks(){
    this.router.navigate(['/talk']);
  }
}
