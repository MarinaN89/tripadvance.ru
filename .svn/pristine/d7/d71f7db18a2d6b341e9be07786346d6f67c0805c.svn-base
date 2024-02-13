import { Component } from '@angular/core';
import { SiteService } from '../../site.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-integration-traktir',
  templateUrl: './services-integration-traktir.component.html',
  styleUrls: ['./services-integration-traktir.component.scss']
})
export class ServicesIntegrationTraktirComponent {
  currentPacket: any = [];
  activePacket:any = 0;
  page:any = {};

  constructor(public site:SiteService, private route: ActivatedRoute){

  }

  ngOnInit(): void {   
    this.currentPacket = this.site.packages.traktir;
    this.page = this.site.GetCurrentPage();
  }

  ngAfterContentInit(){
  }
}
