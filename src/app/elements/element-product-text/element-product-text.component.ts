import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-product-text',
  templateUrl: './element-product-text.component.html',
  styleUrls: ['./element-product-text.component.scss']
})
export class ElementProductTextComponent {
  @Input() item:any = {}
}
