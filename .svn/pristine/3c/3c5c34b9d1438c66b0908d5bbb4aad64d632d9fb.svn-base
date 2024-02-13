import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  text:any = "";
  @Input() size:any = 16;

  @Input() 
  set value(price:any){
    this.text = this.toPrice(price);
    console.log(this.text);
  }

  toPrice(price:any){

    var p = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ');
    return p;
  }
}
