import { Component } from '@angular/core';
import { SiteService } from '../../site.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-integration-hotel',
  templateUrl: './services-integration-hotel.component.html',
  styleUrls: ['./services-integration-hotel.component.scss']
})
export class ServicesIntegrationHotelComponent {

  currentPacket: any = [];
  activePacket:any = 0;
  page:any = {};

  constructor(public site:SiteService, private route: ActivatedRoute){

  }

  ngOnInit(): void {   
    this.currentPacket = this.site.packages.hotel;
    this.page = this.site.GetCurrentPage();
  }

  ngAfterContentInit(){
  }
}
