import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-element-packages',
  templateUrl: './element-packages.component.html',
  styleUrls: ['./element-packages.component.scss']
})
export class ElementPackagesComponent {
  @Input() item:any = [];
  activePacket:any = 0;
  isInit:boolean = false;

  constructor(public route:ActivatedRoute){}

  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      if(params["packet"] != undefined){
        this.activePacket = parseInt(params["packet"]);
      }
    });

    this.isInit = true;

  }
  ngAfterViewInit(): void{
    
  }

  changeBlock(blocks:any, item:any){
    for(var i = 0; i < blocks.length; i++){
      if(blocks[i] == item){
        blocks[i].open = !blocks[i].open;
      }else
        blocks[i].open = false;
    }
  }

  toPrice(price:any){
    return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ');
  }
}
