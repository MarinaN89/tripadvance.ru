import { Component } from '@angular/core';
import { SiteService } from '../../site.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-integration-roznica',
  templateUrl: './services-integration-roznica.component.html',
  styleUrls: ['./services-integration-roznica.component.scss']
})
export class ServicesIntegrationRoznicaComponent {
  currentPacket: any = [];
  activePacket:any = 0;
  page:any = {};

  constructor(public site:SiteService, private route: ActivatedRoute){

  }

  ngOnInit(): void {   
    this.currentPacket = this.site.packages.roznica;
    this.page = this.site.GetCurrentPage();
  }

  ngAfterContentInit(){
  }
}