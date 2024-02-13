import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() min:any = 0;
  @Input() max:any = 1000;
  @Input() value:any = 0;
  @Output('onChange') event = new EventEmitter<any>();

  add(){
    if(this.value >= this.max)
      return;

    this.value = this.value + 1;
    this.event.emit(this.value);
  }

  remove(){
    if(this.value <= this.min)
      return;
      
    this.value = this.value - 1;
    this.event.emit(this.value);
  }
}
