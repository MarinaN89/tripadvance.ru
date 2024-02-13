import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-product-baner',
  templateUrl: './element-product-baner.component.html',
  styleUrls: ['./element-product-baner.component.scss']
})
export class ElementProductBanerComponent {
  @Input() item:any = {};
}
