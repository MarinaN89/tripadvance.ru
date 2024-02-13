import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-product-list',
  templateUrl: './element-product-list.component.html',
  styleUrls: ['./element-product-list.component.scss']
})
export class ElementProductListComponent {
  @Input() item:any = [];
}
