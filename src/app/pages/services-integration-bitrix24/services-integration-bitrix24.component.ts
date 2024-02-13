import { Component } from '@angular/core';
import { SiteService } from '../../site.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-integration-bitrix24',
  templateUrl: './services-integration-bitrix24.component.html',
  styleUrls: ['./services-integration-bitrix24.component.scss']
})
export class ServicesIntegrationBitrix24Component {
  page:any = {};

  constructor(public site:SiteService, private route: ActivatedRoute){

  }

  ngOnInit(): void {   
    this.page = this.site.GetCurrentPage();
  }

  ngAfterContentInit(){
  }
}
