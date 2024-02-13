import { Component } from '@angular/core';
import { SiteService } from '../../site.service';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-devices-hotel',
  templateUrl: './devices-hotel.component.html',
  styleUrls: ['./devices-hotel.component.scss']
})
export class DevicesHotelComponent {
  page:any = {};
  device: any = undefined;
  products: any = [];

  constructor(public site:SiteService, public route:ActivatedRoute, private router:Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        this.device = undefined;
        this.route.queryParams.subscribe(params => {
          if(params["id"] != undefined){
            this.device = this.site.GetDevice(params["id"]);
          }
        });
     }
    });

  }

  ngOnInit(): void {   
    this.page = this.site.GetCurrentPage();
    if(this.device == undefined){
      this.products = this.site.GetProducts(this.page.products);
    }
  }

  ngAfterContentInit(){
  }
}
