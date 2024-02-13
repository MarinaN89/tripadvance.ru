import { Component } from '@angular/core';
import { SiteService } from '../../site.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-integration-ut',
  templateUrl: './services-integration-ut.component.html',
  styleUrls: ['./services-integration-ut.component.scss']
})
export class ServicesIntegrationUtComponent {
  currentPacket: any = [];
  activePacket:any = 0;
  page:any = {};

  constructor(public site:SiteService, private route: ActivatedRoute){

  }

  ngOnInit(): void {   
    this.currentPacket = this.site.packages.ut;
    this.page = this.site.GetCurrentPage();
  }

  ngAfterContentInit(){
  }
}
