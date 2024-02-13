import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-slider',
  templateUrl: './button-slider.component.html',
  styleUrls: ['./button-slider.component.scss']
})
export class ButtonSliderComponent {
  
  @Input() small:any = false;

  @Output('onClick') event = new EventEmitter<any>();

  productNext(){
    this.event.emit(1);
  }

  productPrev(){
    this.event.emit(-1);
  }
}
