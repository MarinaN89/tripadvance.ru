import { Component, Input, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-element-present',
  templateUrl: './element-present.component.html',
  styleUrls: ['./element-present.component.scss']
})
export class ElementPresentComponent {
  @Input() item:any={};
  @Input() height:any="auto";
  
  heightImage:any = "550px";
  @ViewChild('image') image!: ElementRef;

  ngAfterViewInit(){
    /*this.heightImage = "auto";*/

    this.onResize(0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    //if( document.body.clientWidth < 1440){
    //  this.heightImage = "auto";
    //}
  }
}
