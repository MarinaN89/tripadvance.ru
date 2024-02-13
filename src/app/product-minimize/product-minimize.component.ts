import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-minimize',
  templateUrl: './product-minimize.component.html',
  styleUrls: ['./product-minimize.component.scss']
})
export class ProductMinimizeComponent {
  @Input() isNew:any = false
  @Input() title:any = "";
  @Input() description:any = "";
  @Input() href:any = "";
}
