import { Component } from '@angular/core';
import { SiteService } from '../../site.service';

@Component({
  selector: 'app-services-integration-booking-module',
  templateUrl: './services-integration-booking-module.component.html',
  styleUrls: ['./services-integration-booking-module.component.scss']
})
export class ServicesIntegrationBookingModuleComponent {

  currentPacket: any = [];
  activePacket:any = 0;
  page:any = {};

  constructor(public site:SiteService){
  }

  ngOnInit(): void {   
    this.currentPacket = this.site.packages.hotel;
    this.page = this.site.GetCurrentPage();
  }

  ngAfterContentInit(){
  }
}
