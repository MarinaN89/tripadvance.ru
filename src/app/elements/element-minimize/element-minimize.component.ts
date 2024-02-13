import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-element-minimize',
  templateUrl: './element-minimize.component.html',
  styleUrls: ['./element-minimize.component.scss']
})

export class ElementMinimizeComponent {
  @Input() item:any = {};
  @Input() sizeTitle:any = 18;
  @Input() height:any = "auto";
  @Input() padding:any = "6px 24px 0px 24px";
}
