import { Component, Input } from '@angular/core';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-element-product-item',
  templateUrl: './element-product-item.component.html',
  styleUrls: ['./element-product-item.component.scss']
})
export class ElementProductItemComponent {
  @Input() item:any = {};

  total:any = 0;
  kit: any = [];
  parameters: any = [];

  constructor(public site:SiteService){}

  ngOnInit(){
    this.total = this.item.price;
    this.item.count = 1;
    this.kit = this.site.GetDeviceKit(this.item.id);

    for(var i = 0; i < this.kit.length; i++){
      this.kit[i].count = 0;
    }

    if(this.item.parameters != undefined)
      this.parameters = this.item.parameters;
    
    for(var i = 0; i < this.parameters.length; i++){
      this.parameters[i].open = false;
    }
  }

  updateTotal(){
    this.total = this.item.price * this.item.count;
    for(var i = 0; i < this.kit.length; i++){
      var kitPrice = this.kit[i].count * this.kit[i].price;
      this.total = this.total + kitPrice;
    }
  }

  openParam(param:any){
    for(var i = 0; i < this.parameters.length; i++){
      if(param != this.parameters[i]){
        this.parameters[i].open = false;
      }else{
        this.parameters[i].open = !this.parameters[i].open;
      }
    }
  }
}
