import { Component } from '@angular/core';
import { SiteService } from '../../site.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-integration-bp',
  templateUrl: './services-integration-bp.component.html',
  styleUrls: ['./services-integration-bp.component.scss']
})
export class ServicesIntegrationBpComponent {

  currentPacket: any = [];
  activePacket:any = 0;
  page:any = {};

  constructor(public site:SiteService, private route: ActivatedRoute){

  }

  ngOnInit(): void {   
    this.currentPacket = this.site.packages.bp;
    this.page = this.site.GetCurrentPage();
  }

  ngAfterContentInit(){
  }
}

