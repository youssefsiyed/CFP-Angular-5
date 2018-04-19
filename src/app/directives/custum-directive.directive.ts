import { Directive,Renderer2,ElementRef,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appCustumDirective]'
})
export class CustumDirectiveDirective {

  @HostBinding('class.open') isCheck : boolean = true;

  @HostListener('click') toogleOpen (eventData :Event){
    this.isCheck=!this.isCheck;
  }
  
  // @HostBinding('mouseenter') backGroundColor: string ='green';
  // constructor(private elRef : ElementRef, private rend :Renderer2) { 
  //       //this.backGroundColor = 'blue';
  // }

}
