import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-yellow',
  templateUrl: './element-yellow.component.html',
  styleUrls: ['./element-yellow.component.scss']
})
export class ElementYellowComponent {
  @Input() item:any = {};
}
